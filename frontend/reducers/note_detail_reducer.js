import { RECEIVE_SINGLE_NOTE } from '../actions/notes_actions';

const NoteDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_NOTE:
      return action.note;

    default:
      return state;
  }
};

export default NoteDetailReducer;
