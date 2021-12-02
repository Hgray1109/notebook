class VideoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :url, :title, :video_body
end
