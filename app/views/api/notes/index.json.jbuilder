@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :author_id, :notebook_id, :title, :body,
                  :updated_at, :created_at
  end
end
