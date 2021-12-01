class User < ApplicationRecord
    has_many :albums, dependent: :destroy
    has_many :songs, through: :albums
    has_many :singles, dependent: :destroy
    has_many :videos, dependent: :destroy
    has_many :pens, dependent: :destroy
    has_secure_password

    validates :user_name, presence: true, length: {in: 4..20}, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
