import { connect } from 'react-redux';
import NotebookHeader from './notebook_header';
import { fetchSingleNotebook } from '../../actions/notebooks_actions';

const mapStateToDispatch = state => ({
  notebook: state.notebook
});

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: (notebookId) => dispatch(fetchSingleNotebook(notebookId))
});

export default connect(
  mapStateToDispatch,
  mapDispatchToProps
)(NotebookHeader);