import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import {
  createTaggedNote,
  deleteTaggedNote
} from '../../actions/tagged_notes_actions';

const mapDispatchToProps = dispatch => ({
  createTaggedNote: (taggedNote) => dispatch(createTaggedNote(taggedNote)),
  deleteTaggedNote: (taggedNoteId) => dispatch(deleteTaggedNote(taggedNoteId))
});

export default connect(
  null,
  mapDispatchToProps
)(TagsIndex);
