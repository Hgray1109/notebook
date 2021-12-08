class AddserializeToMusicPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :music_players, :hash, :text

  end
end
