require 'json'

module Adapters
  class ReactApi
    attr_accessor :token

    def initialize(params)
      @token = get_token(params["code"]) #react_front token
    end

    def parsecode #calls adapter method get_token
    spotify_client = Adapters::SpotifyApi.new(params)
    # spotify_token is the spotify_token that we will use to get a user
    me_object = spotify_client.get_current_user
    username = me_object["id"]
    if username
      user = User.find_or_create_by(username: username)
      user.update(display_name: me_object["display_name"])
      spotify_client.save_spotify_artist_data(user)
      spotify_client.save_spotify_track_data(user)
    end
    redirect_to ENV['SPOT_REDIRECT'] + "#{user.id}"
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



    