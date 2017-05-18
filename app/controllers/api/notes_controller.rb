class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
    render 'api/notes/index'
  end

  def show
    @note = Note.find_by(id: params[:id])
    render 'api/notes/show'
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages
    end
  end

  def update
    @note = Note.find_by(id: params[:id])

    if @note.update_attributes(note_params)
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])
    @note.delete
    render 'api/notes/show'
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
