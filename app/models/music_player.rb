class MusicPlayer < ApplicationRecord
    belongs_to :user

    serialize :hash
end
