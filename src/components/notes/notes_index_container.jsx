import { connect } from 'react-redux'
import NotesIndex from './notes_index'
import { fetchNotes, receiveSingleNote } from '../../actions/notes_actions'
import { notesByUpdated } from '../../reducers/selectors'

const mapStateToProps = state => ({
  notes: notesByUpdated(state)
})

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  receiveSingleNote: note => dispatch(receiveSingleNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesIndex)
