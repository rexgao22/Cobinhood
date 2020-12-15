class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :company_name, null: false
      t.string :ticker_symbol, null: false

      t.timestamps
    end
    add_index :assets, :company_name, unique: true
    add_index :assets, :ticker_symbol, unique: true
  end
end
