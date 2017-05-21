@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :author_id, :title, :description
  end
end
