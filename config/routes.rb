Rails.application.routes.draw do
  
  resources :comments, only: [:index, :create, :destroy]
  resources :pens, only: [:index, :create, :destroy]
  resources :videos, only: [:index, :show, :create, :destroy]
  resources :singles, only: [:index, :show,:create, :destroy]
  resources :songs, only: [:index, :show, :destroy]
  resources :albums, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
