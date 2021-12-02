class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :artist, :title, :uri, :url
end
