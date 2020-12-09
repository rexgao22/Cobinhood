class ChaneUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :buying_power, :decimal, precision: 12, scale: 2, default: 0, null: false
  end
end
