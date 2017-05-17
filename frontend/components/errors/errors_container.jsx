import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import Errors from './errors';

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null
)(Errors);
