Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :user, only: []

resources :users
  # root to: 'site#index'
  # get '/callback/', to: 'site#parsecode'
  post '/callback/', to: 'site#parsecode'

  get '/login/', to: 'site#login'


  namespace :api do 
  	namespace :v1 do 
  	 resources :users, only: [:index, :create, :destroy, :update] 
  	end 

  end
  # get '/callback/', to: 'sessions#userdata'


end
