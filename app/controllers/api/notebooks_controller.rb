class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render 'api/notebooks/index'
  end

  def show
    @notebook = Notebook.find_by(id: params[:id])
    render 'api/notebooks/show'
  end

  def create
    @notebook = Notebook.new(notebook_params)

    if @notebook.save
      render 'api/notebooks/show'
    else
      render json: @notebook.errors.full_messages
    end
  end

  def update
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook.update_attributes(notebook_params)
      render 'api/notebooks/show'
    else
      render json: @notebook.errors.full_messages
    end
  end

  def destroy
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook
      @notebook.delete
      render 'api/notebooks/show'
    else
      render json: ["Cannot delete another user's notebook"], status: 403
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:author_id, :title, :description)
  end
end
