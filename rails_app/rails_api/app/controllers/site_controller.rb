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
 # (@user_params["passwordInput"] == @user_params["passwordConfirm"]) ? (password_confirmed = true): (password_confirmed = false)
          # if password_confirmed
           user = User.new(email: @user_params["email"], password: @user_params["passwordInput"], password_confirmation: @user_params["passwordConfirm"])  
             if user.save
              @user_id = user.id
             end 
          # end
       end 
      self.add_userId(@user_params)
   end


    def add_userId(user_params) 
       @user_params["id"]= @user_id
       self.clouddata(@user_params) 
       self.make_jwt(@user_params)
    end

#NEED TO MAKE LOG-IN VERSION OF THIS CODE
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
      headers: {"admin-key": "ca93abe8-6f81-4bad-ab04-60a43d73e877"} }
    )   
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
      headers: {"admin-key": "ca93abe8-6f81-4bad-ab04-60a43d73e877"}}
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
      HTTParty.post("http://api.dronesmith.io/index/user/#{user_email}/sendsms",
        {
          body: {
            "phone": code['phoneNumber'],
            "country": code['countryCode']
            },
          headers: {"admin-key": "ca93abe8-6f81-4bad-ab04-60a43d73e877"}
        })
    end

   #Verify User code  
    def verify_code
      @code_params = request.request_parameters
      self.code_data(@code_params) 
    end

    def code_data(data)
      user_email = data['email']
      uri_userCode = "http://api.dronesmith.io/index/user/#{user_email}/verify"
      HTTParty.post(uri_userCode,
      {body:  {
        "code": data['code']
        },   
      headers: {"admin-key": "ca93abe8-6f81-4bad-ab04-60a43d73e877"}}
     )
    end

  private
    def auth_params
      params.require(:auth).permit(:email, :password, :password_confirmation)
    end

end

