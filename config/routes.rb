Rails.application.routes.draw do
  
  resources :comments, only: [:index, :create, :destroy, :update]
  resources :pens, only: [:index, :create, :destroy]
  resources :videos, only: [:index, :create, :destroy]
  resources :singles, only: [:index, :create, :destroy]
  resources :songs, only: [:index, :create, :destroy]
  resources :albums, only: [:index, :create, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
