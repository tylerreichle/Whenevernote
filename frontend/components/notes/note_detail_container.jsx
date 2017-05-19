import { connect } from 'react-redux';
import NoteDetail from './note_detail';
import {
  fetchNotes,
  fetchSingleNote,
  updateNote,
  deleteNote
} from '../../actions/notes_actions';

const mapStateToProps = state => ({
    note: state.note
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchSingleNote: (noteId) => dispatch(fetchSingleNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
