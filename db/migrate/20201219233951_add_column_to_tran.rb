class AddColumnToTran < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :order_type, :string, null: false
  end
end
