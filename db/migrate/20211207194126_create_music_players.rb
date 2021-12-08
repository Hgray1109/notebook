class CreateMusicPlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :music_players do |t|
      t.integer :user_id
      t.string :album
      t.string :artist
      t.string :song
      t.string :uri
      t.string :url

      t.timestamps
    end
  end
end
