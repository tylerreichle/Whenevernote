@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body, :author_id, :notebook_id
  end
end
