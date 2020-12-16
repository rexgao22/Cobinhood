class Api::AssetsController < ApplicationController

    def index 
        @assets = current_user.assets
        @holdings = current_user.holdings 
        render :index
    end

    def show 
        @asset = Asset.find_by(ticker: params[:id])
    end

    def search 
        str = params[:searchbar]
        return_assets = Asset.where("LOWER(company_name) LIKE ? OR ticker_symbol LIKE ?", "%#{str.downcase}%","%#{str.upcase}%")
        # @assets = result_assets(return_assets, str)
        render :search
    end
end
