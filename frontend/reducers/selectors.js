import { values } from 'lodash';

export const selectAllNotes = ({ notes }) => values(notes);
export const selectAllNotebooks = ({ notebooks }) => values(notebooks);

export const selectNotesByNotebook = (state, notebookId) => {
  const allNotes = values(state.notes);
  return allNotes.filter(note => (
    note.notebook_id === notebookId
  ));
};

export const notesByUpdated = ({ notes }) => {
  const allNotes = values(notes);
  return allNotes.sort((a, b) => (
    new Date(b.updated_at) - new Date(a.updated_at)
  ));
};
