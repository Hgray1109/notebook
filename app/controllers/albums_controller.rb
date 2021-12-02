class AlbumsController < ApplicationController


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
        album = Album.find_by(id: params[:id])
        if album
            album.destroy
            head :no_content
        else render json: {error: "Album not found"},
        status: :not_found
        end
    end

end
