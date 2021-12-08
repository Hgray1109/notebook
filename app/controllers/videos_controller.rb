class VideosController < ApplicationController
    # before_action :set_video, only: [:create, :destroy] 
    before_action :authorize_user, only: [:index, :create, :destroy]



    def index
        videos = Video.all
        render json: videos, status: :ok
    end


    def create
        video = Video.create(video_params)
        if video.valid?
          render json: video, status: :created
        else
          render json: {errors: "Some error here"}, status: :unprocessable_entity
        end
      end


      # def destroy
      #   @video.destroy
      # end
      def destroy
        one_video = Video.find(params[:id])
        one_video.destroy
      end

    private

    # def set_video
    #     @video = Video.find(params[:id])
    # end

    def video_params
        params.permit(:user_id, :url)
    end


    def authorize_user
        user_can_modify = current_user.admin? || @video.user_id == current_user.id
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
      end
    
    

end
