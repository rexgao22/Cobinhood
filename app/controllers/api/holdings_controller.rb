class Api::HoldingsController < ApplicationController
  def index
    @holdings = current_user.holdings
    render :index
  end

  def create
    @holding = Holding.new(holding_params)
    if @holding.save!
      render "api/holdings/show"
    else
      render json: @holding.errors.full_messages, status: 422
    end
  end

  def update
    @holding = Holding.find(params[:id])
    int_amount = @holding.amount
    @holding.amount = params[:amount]
    if @holding.save
      render :show
    else
      render json: ["exceed #{int_amount} shares to sell"], status: 422
    end
  end

  def destroy
    @holding = Holding.find_by(id: params[:id])
    @holding.destroy
    render :show
  end

  private

  def holding_params
    params.require(:holding).permit(:user_id, :asset_id, :amount)
  end
end
