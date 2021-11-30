class PenSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id, :description
end
