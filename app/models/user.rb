class User < ApplicationRecord
    has_many :albums
    has_many :songs, through: :albums
    has_many :singles
    has_many :videos
    has_many :pens
    has_secure_password

    validates :user_name, length: {in: 4..20}, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
