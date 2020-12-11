class RemoveAssetPriceColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :assets, :price, :percent_change
  end
end
