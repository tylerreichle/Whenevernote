import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/notes_actions';
import { notesByUpdated } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notes: notesByUpdated(state),
  firstNote: notesByUpdated(state)[0]
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
