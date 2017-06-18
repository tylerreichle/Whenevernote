import { connect } from 'react-redux';
import NewNotebook from './new_notebook';
import { createNotebook } from '../../actions/notebooks_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewNotebook);
