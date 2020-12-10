
json.extract! @user, :id, :username, :buying_power


# json.assets do 
#     @user.holdings.each do |holding|
#         asset = Asset.find(holding.asset_id)
#         json.set! asset.id do 
#             json.extract! asset, :id, :company_name, :ticker_symbol, :price, :percent_change
#             json.amount holding.amount
#         end
#     end
# end
