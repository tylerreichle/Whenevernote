import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { fetchSingleNotebook } from '../../actions/notebooks_actions';
import { selectNotesByNotebook } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
  notebook: state.notebook,
  notebookNotes: selectNotesByNotebook(state, ownProps.match.params.notebookId)
};};

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: (notebookId) => dispatch(fetchSingleNotebook(notebookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);
