class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :company_name, null: false
      t.string :ticker_symbol, null: false
      t.decimal :price, precision: 9, scale: 2, null: false
      t.decimal :percent_change, precision: 4, scale: 2, null: false

      t.timestamps
    end
    add_index :assets, :company_name, unique: true
    add_index :assets, :ticker_symbol, unique: true
  end
end
