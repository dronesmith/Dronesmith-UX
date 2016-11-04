require 'rest-client'
require 'httparty'
require 'pry'


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
                session[:user_id] = user.id
               end 
            end
         end   
      end
    
    def login
    	@user_params = request.request_parameters
	    render json: @user_params
    end


    # private
    #   def new_params
    #     params.require(:user).permit( )
    #   end

end

