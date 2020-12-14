class ChangeDefaultBuyingPower < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :buying_power, from: 0.0, to: 2000.0
  end
end
