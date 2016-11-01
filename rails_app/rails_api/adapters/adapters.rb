require 'json'

module Adapters
  class ReactApp
    attr_accessor :token

    def initialize(params)
      @token = get_token(params["code"]) #react_front token
    end

    def get_token(code) 
    end
     
    def get_user_data
    end

    #prepare to send data to cloud
    def send_user_data(user)
    end
    
  end
end



    