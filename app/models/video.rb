class Video < ApplicationRecord


    def index
        videos = Video.all
        render json: videos, status: :ok
    end

    def create
        video = Video.create(video_params)
        if video.valid?
            render json: video, status: :created
        else
            render json: {errors: ""}
        end
    end
end
