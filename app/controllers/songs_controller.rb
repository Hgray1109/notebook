# require "rspotify"






# class SongsController < ApplicationController
#     before_action :set_song, only: [:destroy]
#     before_action :authorize_user, only: [:destroy]

#     def index 
#         songs = Song.all
#         render json: songs, status: :ok
#     end



#     def search_songs
#         artists = RSpotify::Artist.search(params[:search])
#         # artists = RSpotify::Artist.search('Arctic Monkeys')
#             arctic_monkeys = artists.first
#             arctic_monkeys.popularity      #=> 74
#             arctic_monkeys.genres          #=> ["Alternative Pop/Rock", "Indie", ...]
#             arctic_monkeys.top_tracks(:US) #=> (Track array)

#             albums = arctic_monkeys.albums
#             albums.first.name #=> "AM"

#             am = albums.first
#             am.release_date      #=> "2013-09-10"
#             am.images            #=> (Image array)
#             am.available_markets #=> ["AR", "BO", "BR", ...]

#             tracks = am.tracks
#             tracks.first.name #=> "Do I Wanna Know?"  
#             render json: tracks
#     end

    


    
#     def show
#         song = Song.find_by(id: params[:id])
#         if song
#             render json: song
#         else
#             render json: {error: "Song not Found"}, status: :not_found
#         end
#     end



#      def destroy
#         @song.destroy
#         end
    

# private 

# def set_song
#     @song = Song.find(params[:id])
#   end

# def authorize_user
#     user_can_modify = current_user.admin? || @song.user_id == current_user.id
#     render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
#   end


# end
