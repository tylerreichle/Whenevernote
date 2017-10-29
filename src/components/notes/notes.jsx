import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Sidebar from '../sidebar/sidebar'
import NotesIndex from '../notes/notes_index_container'
import NoteDetail from '../notes/note_detail_container'
import NewNote from '../notes/new_note_container'

const Notes = (props) => {
  if (props.location.pathname === '/notes/new') {
    return <NewNote />
  }

  return (
    <section className="notes">
      <Route path="/notes" component={Sidebar} />
      <Route path="/notes" component={NotesIndex} />
      <Route path="/notes/:noteId" component={NoteDetail} />
    </section>
  )
}

Notes.propTypes = {
  location: PropTypes.object.isRequired
}

export default Notes
