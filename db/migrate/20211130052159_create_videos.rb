class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.integer :user_id
      t.string :url

      t.timestamps
    end
  end
end
