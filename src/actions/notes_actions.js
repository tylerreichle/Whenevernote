import * as NotesAPI from '../util/notes_api_util'
import { receiveErrors } from './session_actions'

export const RECEIVE_NOTES = 'RECEIVE_NOTES'
export const RECEIVE_SINGLE_NOTE = 'RECEIVE_SINGLE_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
})

export const receiveSingleNote = note => ({
  type: RECEIVE_SINGLE_NOTE,
  note
})

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
})

export const fetchNotes = () => dispatch => (
  NotesAPI.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
)

export const fetchSingleNote = noteId => dispatch => (
  NotesAPI.fetchSingleNote(noteId)
    .then(note => dispatch(receiveSingleNote(note),
      (errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
)

export const createNote = note => dispatch => (
  NotesAPI.createNote(note)
    .then(newNote => dispatch(receiveSingleNote(newNote),
      (errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
)

export const updateNote = note => dispatch => (
  NotesAPI.updateNote(note)
    .then(updatedNote => dispatch(receiveSingleNote(updatedNote),
      (errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
)

export const deleteNote = noteId => dispatch => (
  NotesAPI.deleteNote(noteId)
    .then(deletedNote => dispatch(removeNote(deletedNote),
      (errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
)
