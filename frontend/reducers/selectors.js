import { values } from 'lodash';

export const selectAllNotes = ({ notes }) => values(notes);
export const selectAllNotebooks = ({ notebooks }) => values(notebooks);
