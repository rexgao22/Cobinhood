class Api::UsersController < ApplicationController
    before_action :require_logged_out, only: [:create]
    
    def create 
        @user = User.new(user_params)

        if @user.save 
            login(@user)
            render :show
        else
            reder json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.find_by(id:params[:id])
        if @user
            render :show
        else
            render json:['This user is not exist'], status: 404
        end
    end

    def update 
        @user = User.find_by(id:params[:id])
        @user.buying_power += params[:change].to_i

        if @user.buying_power >= 0 && @user
            @user.save!
            render json: @user.buying_power
        else
            render json: ['Not enough buying power'], status: 422
        end
    end
    private 
    
    def user_params
        params.require(:user).permit(:username, :password)
    end

end
