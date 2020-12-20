class Api::TransactionsController < ApplicationController
  def index
    @transactions = current_user.transactions.includes(:asset)
  end

  def show
    @transaction = Transaction.find(params[:id])
  end

  def create
    @transaction = Transaction.new(transaction_params)
    @asset = Asset.find_by(ticker_symbol: params[:transaction][:ticker_symbol])
    @transaction.asset_id = @asset.id
    @transaction.user_id = current_user.id

    transaction_amount = @transaction.price * @transaction.num_shares
    shares_owned = current_user.shares_owned(@transaction.stock_id)

    if @transaction.num_shares > current_user.buying_power && @transaction.order_type == "buy"
      render json: ["Not Enough Buying Power"], status: 401
    elsif @transaction.num_shares > @asset.holding_amount && @transaction.order_type == "sell"
      render json: ["Not Enough Shares"], status: 401
    else
      if @transaction.save
        render json: ["Successfully Purchase"], status: 200
      else
        render json: @transaction.errors.full_messages, status: 422
      end
    end

  private

  def transaction_params
    params.require(:transaction).permit(:price, :num_assets, :order_type)
  end
end
