import { connect } from 'react-redux'
import NoteDetail from './note_detail'
import {
  fetchNotes,
  updateNote,
  deleteNote,
  fetchSingleNote
} from '../../actions/notes_actions'

import { fetchSingleNotebook } from '../../actions/notebooks_actions'

const mapStateToProps = ({ note, notebook }) => ({
  note,
  notebook
})

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchSingleNote: noteId => dispatch(fetchSingleNote(noteId)),
  fetchSingleNotebook: notebookId => dispatch(fetchSingleNotebook(notebookId)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteDetail)
