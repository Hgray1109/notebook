class SongsController < ApplicationController
    before_action :set_song, only: [:destroy]
    before_action :authorize_user, only: [:destroy]


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
        @song.destroy
        end
    

private 

def set_song
    @song = Song.find(params[:id])
  end

def authorize_user
    user_can_modify = current_user.admin? || @song.user_id == current_user.id
    render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
  end


end
