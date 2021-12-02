class AddCardToUser < ActiveRecord::Migration[6.1]
  def change
   add_column :users, :card_number, :integer
   add_column :users, :card_expiration, :integer
   add_column :users, :card_name, :string
  end
end
