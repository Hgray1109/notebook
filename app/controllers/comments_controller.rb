class CommentsController < ApplicationController


    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create
        
        comment = Comment.create(comment_new)
        if comment
            render json: comment, status: :created
        else
            render json: {error: "Unable To Be Processed"}, status: :unprocessable_entity 
        end
    end

    def update
        comments = Comment.find_by(id: params[:id])
        if comments
          comments.update(change_comment)
        else
          render json: {error: "Original Comment Not Found"}, status: :not_found
        end
      end



    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else render json: {error: "Comment not found"},
        status: :not_found
        end
    end


private

    def change_comment
        params.permit(:remark, :id)
    end
    # def set_comment
    #     @comment = Comment.find(params[:id])
    # end

    def comment_new
        params.permit(:album_id, :song_id, :single_id, :remark)
    end
end
