import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchTags } from '../../actions/tags_actions';
import { createTaggedNote } from '../../actions/tagged_notes_actions';
import { selectAllTags } from '../../reducers/selectors';


const mapStateToProps = state => ({
  tags: selectAllTags(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  createTaggedNote: (taggedNote) => dispatch(createTaggedNote(taggedNote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
