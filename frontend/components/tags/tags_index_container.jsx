import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchTags } from '../../actions/tags_actions';
import { selectAllTags } from '../../reducers/selectors';


const mapStateToProps = state => ({
  notebooks: selectAllTags(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
