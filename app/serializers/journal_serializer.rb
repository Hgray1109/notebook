class JournalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :entry
end
