import { values } from 'lodash';

export const selectAllNotes = ({ notes }) => values(notes);
export const selectAllNotebooks = ({ notebooks }) => values(notebooks);
export const selectAllTags = ({ tags }) => values(tags);

export const selectTagIds = tags => {
  return tags.map(tag => tag.id);
};

export const notesByUpdated = ({ notes }) => {
  const allNotes = values(notes);
  return allNotes.sort((a, b) => (
    new Date(b.updated_at) - new Date(a.updated_at)
  ));
};
