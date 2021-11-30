class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :password, :admin

  has_many :albums
  has_many :songs
  has_many :singles
  has_many :videos
  has_many :pens
  
  
end
