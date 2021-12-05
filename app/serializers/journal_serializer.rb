class JournalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :journal_body, :title, :notes

  # belongs_to :user
end
