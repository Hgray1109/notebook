class Song < ApplicationRecord
    belongs_to :user
    belongs_to :album

    has_many :pens
    has_many :comments

end
