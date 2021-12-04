class AddTitleToJournal < ActiveRecord::Migration[6.1]
  def change
    add_column :journals, :title, :string
    add_column :journals, :notes, :string
  end
end
