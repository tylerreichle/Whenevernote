class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes.order("updated_at DESC")
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
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find_by(id: params[:id])

    if @note.update_attributes(note_params)
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])

    if @note.author.id == current_user.id
      @note.delete
      render 'api/notes/show'
    else
      render json: ["Cannot delete another user's note"], status: 403
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
