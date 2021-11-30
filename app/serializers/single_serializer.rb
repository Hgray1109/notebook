class SingleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title

  belongs_to :user
  
  has_many :comments
end
