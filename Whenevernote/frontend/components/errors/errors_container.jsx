import { connect } from 'react-redux';
import Errors from './errors';

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null
)(Errors);
