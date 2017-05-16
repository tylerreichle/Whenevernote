class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:user_sign_in],
      params[:user][:password]
    )
    
  end

  def destroy
    logout!(current_user)
    session[:session_token] = nil
  end
end
