class SongSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :artist, :title, :uri, :url

  has_many :comments
end
