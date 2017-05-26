import * as TaggedNotesAPI from '../util/tagged_notes_api_util';
import { receiveErrors, clearErrors } from './session_actions';
import { fetchSingleNote } from './notes_actions';

export const createTaggedNote = taggedNote => dispatch => (
  TaggedNotesAPI.createTaggedNote(taggedNote)
    .then(newTaggedNote =>
      dispatch(fetchSingleNote(newTaggedNote.note_id)))
);

export const deleteTaggedNote = taggingInfo => dispatch => (
  TaggedNotesAPI.deleteTaggedNote(taggingInfo)
    .then(deletedTaggedNote =>
      dispatch(fetchSingleNote(deletedTaggedNote.note_id))
));
