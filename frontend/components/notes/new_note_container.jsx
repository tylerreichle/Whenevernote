import { connect } from 'react-redux';
import NewNote from './new_note';
import { createNote } from '../../actions/notes_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewNote);
