# config/initializers/omniauth.rb

require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, " efa0b5882003451dbbf97c89a27ee002
  ", "5d6a16c67d6b484087e6ad504b2e8105", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end

