export const fetchNotebooks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/notebooks'
  })
);

export const fetchSingleNotebook = notebookId => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebookId}`
  })
);

export const createNotebook = notebook => (
  $.ajax({
    method: 'POST',
    url: 'api/notebooks/',
    data: { notebook }
  })
);

export const updateNotebook = notebook => (
  $.ajax({
    method: 'PATCH',
    url: `api/notebooks/${notebook.id}`,
    data: { notebook }
  })
);

export const deleteNotebook = notebookId => (
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebookId}`,
  })
);
