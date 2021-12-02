User.destroy_all
Album.destroy_all
Song.destroy_all
Video.destroy_all
Comment.destroy_all


user1 = User.create(username: "Sowande", email: "Sowande@gmail.com", password: "password")
user2 = User.create(username: "Hashem", email: "Hashem@gmail.com", password: "password")

puts "user seeding done"

album1 = Album.create(user_id: user1.id, artist: "Kanye", title: "808 Heart Break", uri:"Albumplayer", url: "AlbumImage")
album2 = Album.create(user_id: user2.id, artist: "Linkin Park", title: "Hybrid Theory", uri:"albumplayer", url: "AlbumImage")

puts "album seeding done"

song1 = Song.create(user_id: user1.id, album_id: album1.id, artist: "Kanye", title: "Heartless", uri:"Songplayer", url: "Songimage")
song2 = Song.create(user_id: user2.id, album_id: album2.id, artist: "Linkin Park", title: "Crawling", uri:"Songplayer", url: "songimage")

puts "song seeding done"

video1 = Video.create(user_id: user1.id, url: "https://www.youtube.com/embed/Co0tTeuUVhU", title: "Heartless Video", video_body: "The visual representation that put kayne on the map")
video2 = Video.create(user_id: user2.id, url: "https://www.youtube.com/embed/Gd9OhYroLN0", title: "Crawling Video", video_body: "When I knew it was the begining of the end")

puts "video seeding done"

journal1 = Journal.create(user_id: user1.id, journal_body: "Description of Written Work")
journal2 = Journal.create(user_id: user2.id, journal_body: "Breakdown of lyrics")

puts "journal seeding done"

comment1 = Comment.create(user_id: user1.id, album_id: album1.id, song_id: song1.id, comment_body: "I want the old Kanye")
comment2 = Comment.create(user_id: user2.id, album_id: album2.id, song_id: song2.id, comment_body: "TMeteora is my number 1")

puts "comment seeding done"