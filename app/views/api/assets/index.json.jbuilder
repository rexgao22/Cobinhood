@assets.each do |asset|
    json.set! asset.ticker_symbol do
      json.partial! "asset", asset: asset
      json.amount asset.holding_amount
    end
  end
end
