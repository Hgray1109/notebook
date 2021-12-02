class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :comments
  has_many :journals
  has_many :videos
end
