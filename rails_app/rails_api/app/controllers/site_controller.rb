require 'rest-client'
require 'httparty'
require 'pry'
require 'json'


class SiteController < ApplicationController
    # skip_before_action :authenticate_user_from_token!
    # before_filter :parsecode

    def index
    end

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
      HTTParty.post("http://api.dronesmith.io/user",
          body:  {
            "email": "code['email']",
            "phone": "555-555-5555",
            "country": "1",
            "company": "code['company']",
            "firstname": "code['email']",
            "lastname": "code['lastName']",
            "language": "Javascript",
            "password": "code['passwordInput']"
            })
      end
      
  
       def login
       	@user_params = request.request_parameters
   	    render json: @user_params
       end

end

