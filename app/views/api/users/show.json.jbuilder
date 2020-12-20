json.user do 
  json.extract! @user, :id, :username, :buying_power
end

json.assets do
  @user.holdings.each do |holding|
    asset = Asset.find(holding.asset_id)
    json.set! asset.id do
      json.extract! asset, :id, :ticker_symbol, :company_name
      json.amount holding.amount
    end
  end
end
