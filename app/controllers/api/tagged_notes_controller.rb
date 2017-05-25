class Api::TaggedNotesController < ApplicationController
  def create
    @tagged_note = TaggedNote.new(tagged_notes_params)

    if @tagged_note.save
      render 'api/tagged_notes/show'
    else
      render json: @tagged_note.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagged_note = TaggedNote.find_by(id: params[:id])

    if @tagged_note.note.author.id == current_user.id
      @tagged_note.delete
      render 'api/tagged_notes/show'
    else
      render json: ["Cannot remove another user's tag"]
    end
  end

  private

  def tagged_notes_params
    params.require(:tagged_note).permit(:tag_id, :note_id)
  end
end
