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
        str = params[:searchbar]
        return_assets = Asset.where("LOWER(company_name) LIKE ? OR ticker_symbol LIKE ?", "%#{str.downcase}%","%#{str.upcase}%")
        # @assets = result_assets(return_assets, str)
        render :search
    end
end

# def search
#   @products = Product.where("title LIKE ?", "%#{params[:search_term]}%")
#   render "api/products/index"
# end
