class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:user_sign_in],
      params[:user][:password]
    )

    if @user
      login_user!(@user)
      render '/api/users/show'
    else
      render json: ['Invalid Credentials'], status: 422
    end
  end

  def destroy
    if current_user
      logout_user!
      render json: {}
    else
      render json: ['Not Signed In'], status: 404
    end
  end
end
