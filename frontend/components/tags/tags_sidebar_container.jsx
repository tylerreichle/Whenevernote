import { connect } from 'react-redux';
import TagsSidebar from './tags_sidebar';
import { fetchTags } from '../../actions/tags_actions';
import { selectAllTags } from '../../reducers/selectors';


const mapStateToProps = state => ({
  tags: selectAllTags(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsSidebar);
