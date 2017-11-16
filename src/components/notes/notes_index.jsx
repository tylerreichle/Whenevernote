import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotesIndexItem from './notes_index_item_container'

export default class NotesIndex extends Component {

  componentDidMount() {
    this.props.fetchNotes().then(() => {
      this.props.history.push(`/notes/${this.props.notes[0].id}`)
    })
  }

  render() {
    const { notes, location } = this.props
    const notesCount = notes.length

    return (
      <section className="notes-index">
        <div className="notes-header">
          <h2>NOTES</h2>
          <h4>{notesCount} notes</h4>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map(note => (
              <NotesIndexItem
                linkPath={`/notes/${note.id}`}
                notePath={location.pathname}
                key={note.id}
                initialNote={note}
              />
            ))
          }
        </ul>
      </section>
    )
  }
}

NotesIndex.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}
