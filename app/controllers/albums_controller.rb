class AlbumsController < ApplicationController
before_action :set_album, only: [:destroy]
before_action :authorize_user, only: [:destroy]

    def index
        albums = Album.all
        render json: albums, status: :ok

    end

    def show
        album = Album.find_by(id: params[:id])
        if album
            render json: album
        else
            render json: {error: "Album Not Found"}, status: :not_found
        end
    end

 
    def destroy
        @album.destroy
      end


    private 

    def set_album
        @album = Album.find(params[:id])
      end

    def authorize_user
        user_can_modify = current_user.admin? || @album.user_id == current_user.id
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
      end
end
