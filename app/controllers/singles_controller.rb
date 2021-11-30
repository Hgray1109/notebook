class SinglesController < ApplicationController


    def index 
        singles = Single.all
        render json: singles, status: :ok
    end

    def show
        single = Single.find_by(id: params[:id])
        if single
            render json: single
        else
            render json: {error: "Song not Found"}, status: :not_found
        end
    end

    def create
        single = Single.create(single_new)
        if single.valid?
            render json: single, status: :created
        else
            render json: {error: "Unable To Be Processed"}, status: :unprocessable_entity 
        end
    end

    def destroy
        single = Single.find_by(id: params[:id])
        if single
            single.destroy
            head :no_content
        else render json: {error: "Song not found"},
        status: :not_found
        end
    end


private

def single_new
    params.permit(:user_id, :title)
end



end
