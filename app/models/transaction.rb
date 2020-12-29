class Transaction < ApplicationRecord
    TYPES = %w[buy sell].freeze
    validates :user_id, :asset_id, :price, :num_assets, :order_type, presence: true
    validates :order_type, inclusion: { in: TYPES }  
    validates :amount, :price, numericality: true
     
    belongs_to :user

    after_save :update_holdings, :update_buying_power

    def update_holdings
        holding = user.holdings.find_by(ticker_symbol: ticker_symbol)
        holding.purchase(amount, order_type)
    end

    def update_buying_power
        current_user.cal_buying_power(price, amount, order_type)
    end
end
