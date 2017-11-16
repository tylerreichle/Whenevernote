import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchSingleNotebook } from '../../actions/notebooks_actions'

import NotesIndexItem from '../notes/notes_index_item_container'

class NotebookShow extends Component {

  componentDidMount() {
    this.props.fetchSingleNotebook(this.props.match.params.notebookId)
      .then(() => {
        this.props.history.push(`/notebook/${this.props.notebook.id}/notes/${this.props.notebook.notes[0].id}`)
      })
  }

  render() {
    const {
      location: {
        pathname
      },
      notebook: {
        id,
        title,
        notes
      }
    } = this.props

    const notesCount = notes.length

    return (
      <section className="notebook-show">
        <div className="nb-show-header">
          <div className="nbs-header-top">
            <h2>{title}</h2>
          </div>
          <div className="nbs-header-bot">
            <h4>{notesCount} notes</h4>
          </div>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map(note => (
              <NotesIndexItem
                linkPath={`/notebook/${id}/notes/${note.id}`}
                notePath={pathname}
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

NotebookShow.propTypes = {
  fetchSingleNotebook: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  notebook: PropTypes.object
}

NotebookShow.defaultProps = {
  notebook: {
    id: '',
    title: '',
    notes: []
  }
}

// Connect

const mapStateToProps = ({ notebook }) => ({
  notebook
})

const mapDispatchToProps = dispatch => ({
  fetchSingleNotebook: notebookId => dispatch(fetchSingleNotebook(notebookId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotebookShow)
