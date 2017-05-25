@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :name, :author_id
  end
end
