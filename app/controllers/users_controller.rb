class UsersController < ApplicationController
    skip_before_action :confirm_authentication


    def index
        user = User.all
        render json: user, status: :ok
    end
    
    def show
        if current_user
        render json: current_user, status: :ok
        else 
        render json: {error: "No active session"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: user.errors}, status: :unprocessable_entity
        end
    end



      private

      def user_params
        params.permit(:username, :email, :password, :password_confirmation)
      end

end
