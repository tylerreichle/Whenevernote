import { connect } from 'react-redux';
import NotebookHeader from './notebook_header';
import {
  fetchSingleNotebook,
  fetchNotebooks
} from '../../actions/notebooks_actions';

const mapStateToProps= state => ({
  notebook: state.notebook,
  notebooks: state.notebooks
});

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: (notebookId) => dispatch(fetchSingleNotebook(notebookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookHeader);
