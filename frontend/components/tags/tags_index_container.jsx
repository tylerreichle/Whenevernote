import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { createTaggedNote } from '../../actions/tagged_notes_actions';

const mapDispatchToProps = dispatch => ({
  createTaggedNote: (taggedNote) => dispatch(createTaggedNote(taggedNote))
});

export default connect(
  null,
  mapDispatchToProps
)(TagsIndex);
