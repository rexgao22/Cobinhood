class Asset < ApplicationRecord
    validates :company_name, :ticker_symbol, presence: true
end
