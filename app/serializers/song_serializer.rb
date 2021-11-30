class SongSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title
  has_many :pens
  has_many :comments

  belongs_to :user
end
