# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Album.destroy_all
Song.destroy_all
Single.destroy_all
Video.destroy_all
Pen.destroy_all
Comment.destroy_all

user1 = User.create(user_name: "Sowande", email: "Sowande@gmail.com", password: "password")
user2 = User.create(user_name: "Hashem", email: "Hashem@gmail.com", password: "password")

puts "user seeding done"

album1 = Album.create(user_id: user1.id, name: "808 Heart Break")
album2 = Album.create(user_id: user2.id, name: "Hybrid Theory")

puts "album seeding done"

song1 = Song.create(user_id: user1.id, album_id: album1.id, title: "Heartless")
song2 = Song.create(user_id: user2.id, album_id: album2.id, title: "Breaking The Habit")

puts "song seeding done"

single1 = Single.create(user_id: user1.id, title: "Mixtape")
single2 = Single.create(user_id: user2.id, title: "Dark")

puts "single seeding done"

video1 = Video.create(user_id: user1.id, url: "https://www.youtube.com/embed/gbRffuAZnnY")
video2 = Video.create(user_id: user2.id, url: "https://www.youtube.com/embed/eVTXPUF4Oz4")

puts "video seeding done"

pen1 = Pen.create(user_id: user1.id, song_id: song1.id, description: "ANIME!")
pen2 = Pen.create(user_id: user2.id, song_id: song2.id, description: "Old School")

puts "pen seeding done"

comment1 = Comment.create(album_id: album1.id, song_id: song1.id, single_id: single1.id, remark: "Not as good as Naruto")
comment2 = Comment.create(album_id: album2.id, song_id: song2.id, single_id: single2.id, remark: "Takes me back to being a kid")

puts "comment seeding done"