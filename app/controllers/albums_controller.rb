class AlbumsController < ApplicationController

    def index
        albums = Album.all
        render json: albums, status: :ok

    end

    def show
        album = Album.find_by(id: params[:id])
        if video
            render json: album
        else
            render json: {error: "Album Not Found"}, status: :not_found
        end
    end

    def create
        album = Album.create(album_new)
        if video.valid?
            render json: album, status: :created
        else
            render json: {errors: "Unable To Be processed"}, status: :unprocessable_entity
        end
    end

    def destroy
        album = Album.find_by(id: params[:id])
        if album
            album.destroy
            head :no_content
        else render json: {error: "Album not found"},
        status: :not_found
        end
    end


private
    def album_new
        params.permit(:user_id, :name)
    end

end
