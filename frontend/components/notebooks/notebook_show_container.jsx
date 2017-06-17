import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { fetchSingleNotebook } from '../../actions/notebooks_actions';

const mapStateToProps = ({ notebook }) => ({
  notebook,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: notebookId => dispatch(fetchSingleNotebook(notebookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotebookShow);
