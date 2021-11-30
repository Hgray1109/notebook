class CommentSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :song_id, :single_id, :remark
end
