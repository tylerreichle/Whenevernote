json.extract! @tag, :id, :name

json.notes do
  json.array! @tag.notes, partial: 'api/notes/note', as: :note
end
