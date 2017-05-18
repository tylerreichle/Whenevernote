import { connect } from 'react-redux';
import { selectFirstNote } from '../../reducers/selectors';
import NoteDetail from './note_detail';
import {
  fetchSingleNote,
  updateNote,
  deleteNote
} from '../../actions/notes_actions';

const mapStateToProps = state => ({
    note: state.note
});

const mapDispatchToProps = dispatch => ({
  fetchSingleNote: (noteId) => dispatch(fetchSingleNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
