class MusicPlayerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album, :artist, :song, :uri, :url, :hash
end
