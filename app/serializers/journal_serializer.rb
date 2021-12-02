class JournalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :journal_body

end
