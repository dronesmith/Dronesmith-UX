Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :user, only: []

resources :users
  # root to: 'site#index'
  # get '/callback/', to: 'site#parsecode'
  post '/callback/', to: 'site#parsecode'
  post '/opensession/', to: 'site#open_session'
  post '/login/', to: 'site#login'
  post '/phonecall/', to: 'site#phonecall'
  post '/verifycode', to: 'site#verify_code'
  put '/forgotpassword', to: 'site#forgot_password'


  namespace :api do 
  	namespace :v1 do 
  	 resources :users, only: [:index, :create, :destroy, :update] 
  	end 
  end
  # get '/callback/', to: 'sessions#userdata'


end
