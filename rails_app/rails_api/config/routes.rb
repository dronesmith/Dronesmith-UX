Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :user, only: []

  # namespace :v1, defaults: { format: :json } do
  #   resource :login, only: [:create], controller: :sessions
  # end

  get '/callback/', to: 'sessions#userdata'


end
