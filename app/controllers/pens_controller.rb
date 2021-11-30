class PensController < ApplicationController

    def index 
        pens = Pen.all
        render json: pens, status: :ok
    end

    def create
        pen = Pen.create(pen_new)
        if pen.valid?
            render json: pen, status: :created
        else
            render json: {error: "Unable To Be Processed"}, status: :unprocessable_entity 
        end
    end

    def destroy
        pen = Pen.find_by(id: params[:id])
        if pen
            pen.destroy
            head :no_content
        else render json: {error: "Details not found"},
        status: :not_found
        end
    end

private 

    def pen_new
        params.permit(:user_id, :song_id, :description)
    end

end
