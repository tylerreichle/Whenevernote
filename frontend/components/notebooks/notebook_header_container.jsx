import { connect } from 'react-redux';
import NotebookHeader from './notebook_header';
import {
  fetchSingleNotebook,
  fetchNotebooks
} from '../../actions/notebooks_actions';
import { updateNote } from '../../actions/notes_actions';

const mapStateToProps= state => ({
  note: state.note,
  notebook: state.notebook,
  notebooks: state.notebooks
});

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: (notebookId) => dispatch(fetchSingleNotebook(notebookId)),
  updateNote: (note) => dispatch(updateNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookHeader);
