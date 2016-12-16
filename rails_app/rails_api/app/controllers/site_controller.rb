require 'rest-client'
require 'pry'
require 'json'
require 'httparty'
require 'base64'
require 'sendgrid-ruby'
include SendGrid

class SiteController < ApplicationController
  
include HTTParty
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

 ##METHODS TO OBTAIN USER SIGN UP INFORMATION TO SEND TO THE CLOUD SERVICE
  def parsecode
     @user_params = request.request_parameters
     if @user_params
       user = User.new(email: @user_params["email"], password: @user_params["passwordInput"], password_confirmation: @user_params["passwordConfirm"])  
         if user.save
           @user_id = user.id
          @user_params["id"]= @user_id
          self.add_userId(@user_params)
         else
          render json: {error: "error"}
         end 
     end 
   #    @user_params["id"]= @user_id
   # self.add_userId(@user_params) 
  end

  def add_userId(user_params)
    self.clouddata(@user_params) 
  end

  def make_jwt(login_params)
    user = User.find_by(email: login_params['email'])
    jwt = Auth.issue({user: user.id})
    render json: {jwt: jwt}
  end 

  def clouddata(code) 
    @user = User.find_by(email: code['email'])
    response = HTTParty.post( "#{ENV['DS_PATH']}/admin/user",
      {body: {    
      "email": code["email"],
      "firstname": code["firstName"],
      "lastname": code["lastName"],
      "phone": "555-555-5555",
      "country": "1",
      "company": code["companyName"],
      "language": code["language"],
      "password": code["passwordInput"]
      },   
      headers: {"admin-key": ENV['DRONESMITH_ADMIN_KEY']} }
    )  
   @user.apikey = response['apiKey']
   @user.first_name = response['firstname']
   @user.save
   @user_isVerified = response["isVerified"]
  end

  ##METHODS TO LOG-IN
    def login
      @log_inparams = request.request_parameters
      inputted_email = @log_inparams['email']
      inputted_password = @log_inparams['passwordInput']
      user = User.find_by(email: inputted_email)
        if user
          if user.authenticate(inputted_password)
            self.make_jwt(@log_inparams)
            self.log_data(@log_inparams)
          else
            render json: {error: "error"}
          end
 
        end
    end

    def log_data(code) 
     response =HTTParty.post("#{ENV['DS_PATH']}/admin/user/#{code['email']}/password",
      {body:  {
        "password": code['passwordInput']
        },   
      headers: {"admin-key": ENV['DRONESMITH_ADMIN_KEY']}}
     )
    end


    ##METHODS TO SEND PHONE NUMBER TO VERIFY PHONE
    def phonecall
      @phone_params = request.request_parameters
      self.phone_data(@phone_params) 
      render json: @phone_params
    end

    def phone_data(code) 
      response=HTTParty.post("https://api.authy.com/protected/json/phones/verification/start?api_key=#{ENV['TWILIO_AUTH_TOKEN']}&via=sms&country_code=#{code['countryCode']}&phone_number=#{code['phoneNumber']}&locale=en")
    end

   #Verify User code  
    def verify_code
      @code_params = request.request_parameters
      self.code_data(@code_params) 
    end

    def code_data(data)
      @user = User.find_by(email: data['email']) 
      uri_userCode = "https://api.authy.com/protected/json/phones/verification/check?api_key=#{ENV['TWILIO_AUTH_TOKEN']}&country_code=#{data['countryCode']}&phone_number=#{data['phoneNumber']}&verification_code=#{data['code']}"
      response= HTTParty.get(uri_userCode)

      if (response["success"] && @user.apikey)
        self.send_email(data)
      end


    end

    #Forgot password
    def forgot_password
      @password_params = request.request_parameters
      @user = User.find_by(email: @password_params['email']) 
      if @user.apikey == @password_params["apiKey"]
        self.update_password(@password_params)
        self.send_password(@password_params)
      else
       render json: "Either Apikey or email was not correct"
      end
 
    end


    def update_password(state)
      user_email = state['email']
      user_password = state['newPassword']
      coded_password= Base64.encode64(user_password)
      encoded_password = coded_password.slice(0..-2)
      uri_userCode = "#{ENV['DS_PATH']}/index/user/#{user_email}"
      response= HTTParty.put(uri_userCode,
      {body:  {
        password: encoded_password,
        isVerifiedEmail: false
        },   
      headers: {"admin-key": ENV['DRONESMITH_ADMIN_KEY']}}
     )
    end

    ##SEND EMAIL TO USER
    def send_email(user_info)
     @user = User.find_by(email: user_info['email']) 
      
      uri_path = "https://api.sendgrid.com/v3/templates/#{ENV['SENDGRID_TEMPLATE_ID']}"
      response=HTTParty.get(uri_path, {   
      headers: {"Authorization": "Bearer #{ENV['SENDGRID_API_KEY']}"}
      })
     
       html_body =response['versions'][0]['html_content']
       subject_body =response['versions'][0]['subject']

        @final_body= html_body.gsub!('[%first_name | Default Value%]', @user.first_name) 
        @final_body= html_body.gsub!('[%api_key%]', @user.apikey) 

          response=HTTParty.post("https://api.sendgrid.com/v3/mail/send",  
              { body: {
              "personalizations": [{"to": [{"email": @user.email}] }] ,
              "from": {"email": ENV['DS_EMAIL'] },
              "subject": "Welcome to Dronesmith!",
              "content": [{"type": "text/html", "value": @final_body}]
              }.to_json,  
              headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + ENV['SENDGRID_API_KEY']} }
            )        
    end


    ##send newpassword to user
    def send_password(state)
      @user = User.find_by(email: state['email'])
       @user.password = state['newpassword']
       @user.save
      SiteMailer.mail_password_email(@user).deliver
    end





  private
    def auth_params
      params.require(:auth).permit(:email, :apikey, :password, :password_confirmation)
    end

end

