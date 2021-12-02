class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :song_id, :remark
end
