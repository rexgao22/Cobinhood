class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :user_id, null: false
      t.string :asset_id, null: false
      t.float :price, null: false
      t.integer :num_assets, null: false
      t.timestamps
    end
    add_index :transactions, [:user_id, :asset_id], unique: true
  end
end
