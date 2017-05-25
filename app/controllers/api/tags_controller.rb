class Api::TagsController < ApplicationController
  def index
    @tags = current_user.tags
    render 'api/tags/index'
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])

    if @tag && @tag.author.id == current_user.id
      @tag.delete
      render 'api/notes/show'
    else
      render json: ["Cannot delete another user's tag"], status: 403
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :author_id)
  end
end
