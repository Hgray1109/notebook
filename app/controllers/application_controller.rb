class ApplicationController < ActionController::API
  include ActionController::Cookies
  # rescue_from ActiveRecord::RecordNotFound, with: :not_found


  before_action :confirm_authentication


  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  # def confirm_authentication
  #   render json: { error: "You must be logged in to do that." }, status: :unauthorized unless logged_in?
  # end

  def confirm_authentication
    render json: { error: "You must be logged in to do that." }, status: :unauthorized unless current_user
  end
  
  # def not_found()
  #   render json: { error: "Could not find" }, status: :not_found
  # end

end
