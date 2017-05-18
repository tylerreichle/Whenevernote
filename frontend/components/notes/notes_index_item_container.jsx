import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { fetchSingleNote } from '../../actions/notes_actions';

const mapDispatchToProps = dispatch => ({
  fetchSingleNote: (noteId) => dispatch(fetchSingleNote(noteId))
});

export default connect(
  null,
  mapDispatchToProps
)(NotesIndexItem);
