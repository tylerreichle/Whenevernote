import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NoteDetailReducer from './note_detail_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  note: NoteDetailReducer,
  notes: NotesReducer,
  errors: ErrorsReducer
});

export default RootReducer;
