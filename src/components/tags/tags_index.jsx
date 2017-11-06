import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagsIndexItem from './tags_index_item'
import { selectTagIds } from '../../reducers/selectors'

export default class TagsIndex extends Component {
  componentDidMount() {
    this.props.fetchTags()
  }

  render() {
    const {
      tags,
      noteId,
      sidebar,
      iiCallback,
      deleteTaggedNote,
      createTaggedNote
    } = this.props

    let noteTags
    if (sidebar) {
      noteTags = []
    } else {
      noteTags = selectTagIds(this.props.noteTags)
    }

    return (
      <div className="tags-index">
        <ul>
          {
            tags.map((tag) => {
              let tagged = false
              if (noteTags.includes(tag.id)) {
                tagged = true
              }
              return (
                <TagsIndexItem
                  tag={tag}
                  key={tag.id}
                  noteId={noteId}
                  tagged={tagged}
                  iiCallback={iiCallback}
                  deleteTaggedNote={deleteTaggedNote}
                  createTaggedNote={createTaggedNote}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

TagsIndex.propTypes = {
  noteId: PropTypes.number,
  noteTags: PropTypes.array,
  tags: PropTypes.array.isRequired,
  sidebar: PropTypes.bool.isRequired,
  fetchTags: PropTypes.func.isRequired,
  iiCallback: PropTypes.string.isRequired,
  deleteTaggedNote: PropTypes.func.isRequired,
  createTaggedNote: PropTypes.func.isRequired
}

TagsIndex.defaultProps = {
  noteId: 0,
  noteTags: []
}
