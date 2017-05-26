import * as TaggedNotesAPI from '../util/tagged_notes_api_util';
import { receiveErrors, clearErrors } from './session_actions';
import { fetchSingleNote } from './notes_actions';

export const createTaggedNote = taggedNote => dispatch => (
  TaggedNotesAPI.createTaggedNote(taggedNote)
    .then(newTaggedNote =>  {
      dispatch(fetchSingleNote(newTaggedNote.note_id));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteTaggedNote = tagggingInfo => dispatch => (
  TaggedNotesAPI.deleteTaggedNote(tagggingInfo)
    .then(deletedTaggedNote =>  {
      dispatch(fetchSingleNote(deletedTaggedNote));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);
