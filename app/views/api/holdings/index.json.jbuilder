@holdings.each do |holding|
  asset = Asset.find(holding.asset_id)
  json.set! asset.id do
    json.extract! asset, :id, :ticker_symbol, :company_name
    json.amount holding.amount
    json.holding_id holding.id
  end
end
