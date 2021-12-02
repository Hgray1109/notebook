class Album < ApplicationRecord
    belongs_to :user
    has_many :songs
    has_many :comments
end
