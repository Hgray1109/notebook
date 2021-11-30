class VideosController < ApplicationController



    def index 
        videos = Video.all
        render json: videos, status: :ok
    end

    def show
        video = Video.find_by(id: params[:id])
        if video
            render json: video
        else
            render json: {error: "Song not Found"}, status: :not_found
        end
    end

    def create
        video = Video.create(video_new)
        if video.valid?
            render json: video, status: :created
        else
            render json: {error: "Unable To Be Processed"}, status: :unprocessable_entity 
        end
    end

    def destroy
        video = Video.find_by(id: params[:id])
        if video
            video.destroy
            head :no_content
        else render json: {error: "Song not found"},
        status: :not_found
        end
    end


private

    def video_new
        params.permit(:user_id, :url)
    end
end
