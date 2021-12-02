class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :artist, :title, :uri, :url

  has_many :songs
  has_many :comments
end
