class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  has_many :songs
  has_many :comments

  belongs_to :user
end
