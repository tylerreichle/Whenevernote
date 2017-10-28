import merge from 'lodash/merge';
import {
  RECEIVE_NOTES,
  REMOVE_NOTE,
  RECEIVE_SINGLE_NOTE,
  } from '../actions/notes_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;

    case RECEIVE_SINGLE_NOTE:
      newState = merge({}, state);
      newState[action.note.id] = action.note;
      return newState;

    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState[action.note.id];
      return newState;

    default:
      return state;
  }
};

export default NotesReducer;
