import { connect } from 'react-redux';
import NewTag from './new_tag';
import { createTag } from '../../actions/tags_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTag);
