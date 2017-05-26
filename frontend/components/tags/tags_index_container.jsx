import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import {
  createTaggedNote,
  deleteTaggedNote
 } from '../../actions/tagged_notes_actions';
 
import { fetchTags } from '../../actions/tags_actions';
import { selectAllTags } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  tags: selectAllTags(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  createTaggedNote: (taggedNote) => dispatch(createTaggedNote(taggedNote)),
  deleteTaggedNote: (taggingInfo) => dispatch(deleteTaggedNote(taggingInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
