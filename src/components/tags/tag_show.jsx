import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotesIndexItem from '../notes/notes_index_item_container'

export default class TagShow extends Component {
  componentDidMount() {

    this.props.fetchSingleTag(this.props.match.params.tagId)
      .then(() => {
        const { tag: { id, notes } } = this.props
        if (notes) {
          this.props.history.push(
            `/tag/${id}/notes/${notes[0].id}`
          )
        }
      })
  }

  render() {
    const {
      location,
      tag: {
        id,
        name,
        notes = []
      }
    } = this.props
    const notesCount = notes.length

    return (
      <section className="tag-show">
        <div className="tag-show-header">
          <div className="tag-header-top">
            <h2>{name}</h2>
          </div>
          <div className="tag-header-bot">
            <h4>{notesCount} notes</h4>
          </div>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map(note => (
              <NotesIndexItem
                key={note.id}
                initialNote={note}
                notePath={location.pathname}
                linkPath={`/tag/${id}/notes/${note.id}`}
              />
            ))
          }
        </ul>
      </section>
    )
  }
}

TagShow.propTypes = {
  tag: PropTypes.object,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  fetchSingleTag: PropTypes.func.isRequired
}

TagShow.defaultProps = {
  tag: {
    id: '',
    name: '',
    notes: []
  }
}
