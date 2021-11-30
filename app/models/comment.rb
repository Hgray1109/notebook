class Comment < ApplicationRecord
    belongs_to :album
    belongs_to :song
    belongs_to :single
end
