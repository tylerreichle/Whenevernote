import { values } from 'lodash';

export const selectAllNotes = ({ notes }) => values(notes);
export const selectFirstNote = ({ notes }) => values(notes)[0];
