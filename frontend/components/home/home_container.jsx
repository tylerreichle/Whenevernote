import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Home);
