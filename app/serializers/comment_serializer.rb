class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :song_id, :comment_body

  belongs_to :user
  belongs_to :album
  belongs_to :song
end
