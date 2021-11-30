class CommentSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :song_id, :single_id, :remark

  belongs_to :album
  belongs_to :song
  belongs_to :single
end
