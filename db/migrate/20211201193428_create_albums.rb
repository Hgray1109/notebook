class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.integer :user_id
      t.string :artist
      t.string :title
      t.string :uri
      t.string :url

      t.timestamps
    end
  end
end
