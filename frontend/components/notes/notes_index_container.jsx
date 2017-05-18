import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/notes_actions';
import { selectAllNotes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notes: selectAllNotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
