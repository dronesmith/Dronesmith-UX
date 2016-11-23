require 'rest-client'
require 'pry'
require 'json'
require 'httparty'


class SiteController < ApplicationController
  # skip_before_action :authenticate_user_from_token!
  # before_filter :parsecode
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
             self.add_userId(@user_params)
             binding.pry
           end 
       end    
   end

  def add_userId(user_params) 
     @user_params["id"]= @user_id
     self.clouddata(@user_params) 
     self.make_jwt(@user_params)
  end

  def make_jwt(login_params)
    user = User.find_by(email: login_params['email'])
    jwt = Auth.issue({user: user.id})
    render json: {jwt: jwt}
  end 

  def clouddata(code) 
    response = HTTParty.post("http://api.dronesmith.io/admin/user",
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
   @user_api_key = response['apiKey'] 
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
        else
          render json: {message: "error"}
        end
    end

    def log_data(code) 
      HTTParty.post("http://api.dronesmith.io/admin/user/#{code['email']}/password",
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
      user_email = code['email']
      binding.pry
# response= HTTParty.post("https://api.authy.com/protected/json/phones/verification/start?api_key=SecX8QnzIA3CgeEUN5JBwBFGTxa2M5Rv&via=sms&country_code=1&phone_number=321-360-6283&locale=en
     response= HTTParty.post("http://api.dronesmith.io/index/user/#{user_email}/sendsms",
        {
          body: {
            "phone": code['phoneNumber'],
            "country": code['countryCode']
            },
          headers: {"admin-key": ENV['DRONESMITH_ADMIN_KEY']}
        })

    end

   #Verify User code  
    def verify_code
      @code_params = request.request_parameters
      self.code_data(@code_params) 
    end

    def code_data(data)
      user_email = data['email']
      binding.pry
      uri_userCode = "http://api.dronesmith.io/index/user/#{user_email}/verify"
      response= HTTParty.post(uri_userCode,
      {body:  {
        "code": data['code']
        },   
      headers: {"admin-key": ENV['DRONESMITH_ADMIN_KEY'] }}
     )
      self.send_email(data)
    end

    ##SEND EMAIL TO USER
    def send_email(user_info)
      @user = User.find_by(email: user_info['email']) 
       binding.pry    
      UserNotifier.send_signup_email(@user).deliver
      redirect_to(@user, :notice => 'User created')
    end

  private
    def auth_params
      params.require(:auth).permit(:email, :password, :password_confirmation)
    end

end

