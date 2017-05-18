import merge from 'lodash/merge';
import { RECEIVE_NOTES, REMOVE_NOTE } from '../actions/notes_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, action.notes);

    case REMOVE_NOTE:
      const newState = merge({}, state);
      delete newState[action.note.id];
      return newState;

    default:
      return state;
  }
};

export default NotesReducer;
