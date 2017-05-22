json.extract! @notebook, :id, :title, :description, :author_id

json.notes do
  json.array! @notebook.notes, partial: 'api/notes/note', as: :note
end
