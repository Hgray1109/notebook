class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :album_id
      t.integer :song_id
      t.string :comment_body

      t.timestamps
    end
  end
end
