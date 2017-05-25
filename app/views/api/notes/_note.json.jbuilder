json.extract! note, :id, :author_id, :notebook_id, :title,
              :body, :updated_at, :created_at

json.tags do
  json.array! note.tags, partial: 'api/tags/tag', as: :tag
end
