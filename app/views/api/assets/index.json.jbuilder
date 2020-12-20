@assets.each do |asset|
    json.set! asset.ticker_symbol do
      json.partial! "asset", asset: asset
    end
  end
end
