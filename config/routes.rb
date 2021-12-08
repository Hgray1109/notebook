Rails.application.routes.draw do
  
  resources :music_players, only: [:index, :show, :create, :search_music, :destroy] 
  resources :videos, only: [:index, :create, :destroy]
  resources :journals
  resources :comments, only: [:index, :create, :destroy]
  resources :songs, only: [:index, :show, :create, :search_music, :destroy]
  resources :albums, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  


  get "/search/:search", to: "music_players#search_music"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # customs
  patch "/journals/:id/update_journal", to: 'journals#update_journal'
  patch "/journals/:id/journal_note", to: "journals#journal_note"
  # config/routes.rb


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
