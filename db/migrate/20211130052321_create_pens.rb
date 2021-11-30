class CreatePens < ActiveRecord::Migration[6.1]
  def change
    create_table :pens do |t|
      t.integer :user_id
      t.integer :song_id
      t.string :description

      t.timestamps
    end
  end
end
