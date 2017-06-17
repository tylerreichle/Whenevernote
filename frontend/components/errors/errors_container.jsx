import { connect } from 'react-redux';
import Errors from './errors';

const mapStateToProps = ({ errors }) => ({
  errors,
});

export default connect(
  mapStateToProps,
  null,
)(Errors);
