class JournalsController < ApplicationController


    def index
        journals = Journal.all
        render json: journals, status: :ok
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
        journal = Journal.find_by(id: params[:id])
        if journal
          journal.update(change_journal)
        else
          render json: {error: "Original Journal Not Found"}, status: :not_found
        end
       
      end
    
      
      def destroy
        journal = Journal.find_by(id: params[:id])
          if journal
            journal.destroy
            head :no_content
          else render json: {error: "Comment not found"}, status: :not_found
          end
        
      end










end
