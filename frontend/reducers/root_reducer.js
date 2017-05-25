import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NoteDetailReducer from './note_detail_reducer';
import NotebooksReducer from './notebooks_reducer';
import NotebookDetailReducer from './notebook_detail_reducer';
import TagsReducer from './tags_reducer';
import TagDetailReducer from './tag_detail_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  note: NoteDetailReducer,
  notes: NotesReducer,
  notebook: NotebookDetailReducer,
  notebooks: NotebooksReducer,
  tag: TagDetailReducer,
  tags: TagsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
