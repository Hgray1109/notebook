class SongsController < ApplicationController



    def index 
        songs = Song.all
        render json: songs, status: :ok
    end

    
    def show
        song = Song.find_by(id: params[:id])
        if song
            render json: song
        else
            render json: {error: "Song not Found"}, status: :not_found
        end
    end



     def destroy
        song = Song.find_by(id: params[:id])
        if song
            song.destroy
            head :no_content
        else render json: {error: "Song not found"},
        status: :not_found
        end
    end




end
