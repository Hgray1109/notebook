class User < ApplicationRecord
    has_many :albums
    has_many :songs, through: :albums
    has_many :videos, dependent: :destroy
    has_many :journals, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_secure_password

    validates :username, presence: true, length: {in: 4..20}, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
