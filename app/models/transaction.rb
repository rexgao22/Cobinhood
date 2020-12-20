class Transaction < ApplicationRecord
    validates :user_id, :asset_id, :price, :num_assets, :order_type, presence: true

    belongs_to :user,
    belongs_to :asset,

    after_save :update_holdings, :update_buying_power

    def update_holdings
        holding = current_user.holdings.find_by(ticker_symbol: ticker_symbol)
        holding.purchase(amount, order_type)
    end

    def update_buying_power
        current_user.cal_buying_power(price, amount, order_type)
    end
end
