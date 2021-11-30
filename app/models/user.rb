class User < ApplicationRecord
    has_many :albums
    has_many :songs, through: :albums
    has_many :singles
    has_many :videos
    
end
