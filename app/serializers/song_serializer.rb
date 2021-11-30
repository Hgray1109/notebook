class SongSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id, :title
end
