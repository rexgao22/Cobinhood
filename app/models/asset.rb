class Asset < ApplicationRecord
  validates :company_name, :ticker_symbol, presence: true

  has_many :holdings,
    foreign_key: :asset_id,
    class_name: :Holding

  has_many :transactions,
    foreign_key: :asset_id, 
    class_name: :Transaction

  def holding_amount
    
      Holding.where(user_id: current_user.id).find_by(asset_id:this.id).amount
  end

  def holding_id
    Holding.where(user_id: current_user.id).find_by(asset_id: this.id).id
  end

end
