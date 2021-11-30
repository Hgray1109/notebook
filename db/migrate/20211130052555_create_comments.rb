class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :album_id
      t.integer :song_id
      t.integer :single_id
      t.string :remark

      t.timestamps
    end
  end
end
