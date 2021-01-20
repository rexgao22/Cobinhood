class Api::AssetsController < ApplicationController

    def index 
        @assets = current_user.assets
        @holdings = current_user.holdings 
        render :index
    end

    def show 
        @asset = Asset.find_by(ticker_symbol: params[:id])
        render :show
    end

    def search 
        str = params[:search]
        return_assets = Asset.where("LOWER(company_name) LIKE ? OR ticker_symbol LIKE ?", "%#{str.downcase}%","%#{str.upcase}%")
        
        @assets = result(return_assets, str)
        render :search
    end
end


private

def result(return_assets, str)
  result = []
  return_assets.each do |asset|
    result << asset if asset.ticker_symbol.start_with?(str.upcase)
  end
  result.sort_by! { |asset| asset.ticker_symbol.length }
  puts(result)
  name_starts_with = []
  return_assets.each do |asset|
    name_starts_with << asset if asset.company_name.downcase.start_with?(str.downcase)
  end
  result += name_starts_with.sort_by { |asset| asset.company_name.length }

  result.uniq!
  #only show 6 result 
  return result[0..6]


end
