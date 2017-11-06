import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class NotebooksIndexItem extends Component {
  constructor(props) {
    super(props)

    this.callbackAction = this.callbackAction.bind(this)
  }

  callbackAction() {
    const {
      tag,
      noteId,
      tagged,
      history,
      iiCallback,
      deleteTaggedNote,
      createTaggedNote
    } = this.props

    if (iiCallback === 'link') {
      history.push(`/tag/${tag.id}/notes`)
    } else if (iiCallback === 'assign') {
      const taggedNote = {
        note_id: noteId,
        tag_id: tag.id
      }

      if (tagged) {
        deleteTaggedNote(taggedNote)
      } else {
        createTaggedNote(taggedNote)
      }
    }
  }

  render() {
    const { tagged, tag: { name } } = this.props

    const className = tagged
      ? 'tags-ii'
      : 'tags-ii tagged'

    return (
      <li onClick={this.callbackAction} className={className}>
        <h4 className="tag-ii-child">{name}</h4>
      </li>
    )
  }
}

NotebooksIndexItem.propTypes = {
  tagged: PropTypes.bool.isRequired,
  noteId: PropTypes.number.isRequired,
  tag: PropTypes.object.isRequired,
  iiCallback: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  deleteTaggedNote: PropTypes.func.isRequired,
  createTaggedNote: PropTypes.func.isRequired
}

export default withRouter(NotebooksIndexItem)
