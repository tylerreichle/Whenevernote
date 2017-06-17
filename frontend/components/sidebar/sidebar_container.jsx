import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { signout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
