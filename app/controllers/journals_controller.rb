class JournalsController < ApplicationController
before_action :set_journal, only: [:update, :show, :destroy] 
before_action :authorize_user, only: [:index, :show, :create, :update, :destroy]

    def index
        journals = Journal.all
        render json: journals, status: :ok
    end


    def show
          render json: @journal 
      end
  

    def create
        journal = Journal.create(journal_params)
        if journal.valid?
          render json: journal, status: :created
        else
          render json: {errors: "Some error here"}, status: :unprocessable_entity
        end
      end
      
      def update
        
        if @journal.update(change_journal)
          render json: @journal, status: :ok
        else
          render json: @journal.errors, status: :unprocessable_entity
        end
       
      end
    
      def update_journal
      
        journal_to_update = Journal.find(params[:id])
        journal_to_update.update!(journal_body: params[:journal_body])
        render json: journal_to_update, status: :ok
    end
      
      def destroy
        @journal.destroy
      end

private

      def change_journal
        params.permit(:user_id, :journal_body, :title)
      end

      def journal_params
        params.permit(:user_id, :journal_body, :title)
      end


      def set_journal
        @journal = Journal.find(params[:id])
      end
    
    def authorize_user
        user_can_modify = current_user.admin? || @journal.user_id == current_user.id
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
      end
    
    


end
