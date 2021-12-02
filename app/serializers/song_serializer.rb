class SongSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :artist, :title, :uir, :url
end
