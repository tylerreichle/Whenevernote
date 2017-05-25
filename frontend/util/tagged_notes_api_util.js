export const createTaggedNote = tagged_note => (
  $.ajax({
    method: 'POST',
    url: '/api/tagged_notes',
    data: { tagged_note }
  })
);

export const deleteTaggedNote = taggedNoteId => (
  $.ajax({
    method: 'DELETE',
    url: `api/tagged_notes/${taggedNoteId}`
  })
);
