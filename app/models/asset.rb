class Asset < ApplicationRecord
  validates :company_name, :ticker_symbol, presence: true

  has_many :holdings,
    foreign_key: :asset_id,
    class_name: :Holding

  has_many :users,
    through: :holdings,
    source: :user


def holding_amount
    Holding.where(user_id: current_user.id).find_by(asset_id:this.id).amount
end

end
