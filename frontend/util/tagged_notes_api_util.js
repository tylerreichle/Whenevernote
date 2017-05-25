export const createTaggedNote = taggedNote => (
  $.ajax({
    method: 'POST',
    url: '/api/tagged_notes',
    data: { taggedNote }
  })
);

export const deleteTaggedNote = taggedNoteId => (
  $.ajax({
    method: 'DELETE',
    url: `api/tagged_notes/${taggedNoteId}`
  })
);
