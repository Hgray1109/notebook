class VideosController < ApplicationController
before_action :authorize_user, only: [:create, :destroy]


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

    def set_video
        @video = Video.find(params[:id])
    end

    def authorize_user
        video = Video.find_by(id: params[:id])
        user_can_modify = video.user_id == current_user.id
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
      end

    #   def authorize_user
    #     user_can_modify = current_user.admin? || @event.user_id == current_user.id
    #     render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
    #   end

    # I don't want just any admin to be able to delete

end
