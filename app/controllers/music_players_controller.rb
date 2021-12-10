require "rspotify"

class MusicPlayersController < ApplicationController
before_action :set_song, only: [:destroy]
before_action :authorize_user, only: [:destroy]

    def index 
        musicplayers = MusicPlayers.all
        render json: songs, status: :ok
    end



    def search_music
        artists = RSpotify::Artist.search(params[:search])
        
        # artists = RSpotify::Artist.search('Arctic Monkeys')
            arctic_monkeys = artists.first
            arctic_monkeys.popularity      #=> 74
            arctic_monkeys.genres          #=> ["Alternative Pop/Rock", "Indie", ...]
            arctic_monkeys.top_tracks(:US) #=> (Track array)

            albums = arctic_monkeys.albums
            albums.first.name #=> "AM"

            album = albums.first
            album.release_date      #=> "2013-09-10"
            album.images            #=> (Image array)
            album.available_markets #=> ["AR", "BO", "BR", ...]

            tracks = album.tracks
            tracks.first.name #=> "Do I Wanna Know?"  
            render json: tracks, status: :ok
    end

    # def search_music
    #     # artists = RSpotify::Album.search(params[:search])
    #     albums = RSpotify::Album.search(params[:search])
     
    #         render json: albums.first, status: :ok
    # end

    


    
    def show
        song = MusicPlayers.find_by(id: params[:id])
        if song
            render json: song
        else
            render json: {error: "Song not Found"}, status: :not_found
        end
    end



     def destroy
        @musicPlayer.destroy
        end
    

    private 

    def set_music_player
    @musicPlayer = MusicPlayers.find(params[:id])
    end

    def authorize_user
    user_can_modify = current_user.admin? || @musicPlayer.user_id == current_user.id
    render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
    end
end




