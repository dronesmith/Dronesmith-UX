require 'rest-client'
require 'httparty'
require 'pry'
require 'json'


class SiteController < ApplicationController
  # skip_before_action :authenticate_user_from_token!
  # before_filter :parsecode

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
 (@user_params["passwordInput"] == @user_params["passwordConfirm"]) ? (password_confirmed = true): (password_confirmed = false)
          if password_confirmed
           user = User.new(email: @user_params["email"])  
             if user.save
              @user_id = user.id
             end 
          end
       end 
      self.add_userId(@user_params)
   end
    
    def add_userId(user_params) 
       @user_params["id"]= @user_id
       self.clouddata(@user_params) 
    end

    def clouddata(code) 
       HTTParty.post("http://api.dronesmith.io/index/user",
        body:  {
          "email": code['email'],
          "phone": "321-360-6283",
          "country": "1",
          "company": code['company'],
          "firstname": code['firstName'],
          "lastname": code['lastName'],
          "language": "Javascript",
          "password": code['passwordInput']
          },   

        headers: {"admin-key": "7a7c9a8a-7216-44b7-9423-737eb8c81684"}
        )
    end
  

  ##METHODS TO LOG-IN
    def login
      @log_inparams = request.request_parameters
      self.log_data(@log_inparams ) 
      render json: @log_inparams 
    end


    def log_data(code) 
      HTTParty.get("http://api.dronesmith.io/index/user/",
      body:  {
        "email": "code['email']",
        "password": "code['passwordInput']"
        },   
      headers: {"admin-key": "7a7c9a8a-7216-44b7-9423-737eb8c81684"}
     )
    end


    ##METHODS TO SEND PHONE NUMBER TO VERIFY PHONE
    def phonecall
      @phone_params = request.request_parameters
      self.phone_data(@phone_params) 
      render json: @phone_params
    end
    

    def phone_data(code) 
      uri_userPhone = ("http://api.dronesmith.io/index/user/#{code['phoneNumber']}/authPhone").gsub(/"/,"")
      HTTParty.get(uri_userPhone,
      body:  {
        "phone": "code['phoneNumber']"
        },   
      headers: {"admin-key": "7a7c9a8a-7216-44b7-9423-737eb8c81684"}
     )
    end

end

