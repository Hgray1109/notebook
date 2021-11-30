class PenSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :song
  
  
  attributes :id, :user_id, :song_id, :description


end
