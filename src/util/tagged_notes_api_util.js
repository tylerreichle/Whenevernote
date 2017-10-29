export const createTaggedNote = taggedNote => (
  $.ajax({
    method: 'POST',
    url: '/api/tagged_notes',
    data: { tagged_note: taggedNote }
  })
)

export const deleteTaggedNote = taggedNote => (
  $.ajax({
    method: 'DELETE',
    url: 'api/tagged_notes/0',
    data: { tagged_note: taggedNote }
  })
)
