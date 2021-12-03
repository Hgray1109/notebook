class CommentsController < ApplicationController
    before_action :set_comment, only: [:destroy, :create]
    before_action :authorize_user, only: [:index, :create, :destroy]

    def index
        # @tests = Test.all
        comments = Comment.all
        render json: comments, status: :ok
      end
  
      def create
        comment = Comment.create(comment_new)
        if comment.valid?
            render json: comment, status: :created
        else
            render json: {error: "Unable To Be Processed"}, status: :unprocessable_entity 
        end
    end

    def destroy
        @comment.destroy
    end

    private 

    def comment_new
        params.permit(:user_id, :album_id, :song_id, :comment_body)
    end

    def set_comment
        @comment = Comment.find_by(params[:id])
      end
    
    def authorize_user
        user_can_modify = current_user.admin? || @comment.user_id == current_user.id
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
      end
    


end
