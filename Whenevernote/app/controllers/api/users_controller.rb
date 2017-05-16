class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login_user!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:userId])
    render 'api/users/show'
  end

  def update
    @user = User.find_by(id: params[:userId])

    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:user_sign_in, :username, :email, :password)
  end
end
