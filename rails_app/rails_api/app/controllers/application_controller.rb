class ApplicationController < ActionController::API
  # before_action :authenticate
  include ::ActionController::Cookies
  # protect_from_forgery with: :null_session 
end

