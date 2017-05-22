import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { fetchSingleNotebook } from '../../actions/notebooks_actions';
import { selectNotesByNotebook } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.notebook,
  notes: selectNotesByNotebook(state, ownProps.location.notebookId)
});

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: (notebookId) => dispatch(fetchSingleNotebook(notebookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);
