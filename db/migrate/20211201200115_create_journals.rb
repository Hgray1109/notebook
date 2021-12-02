class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.integer :user_id
      t.string :journal_body

      t.timestamps
    end
  end
end
