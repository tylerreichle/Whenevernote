import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal'

import TagsIndex from './tags_index_container'

export default class TagsHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    ReactModal.setAppElement('body')
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  tagsMenu() {
    if (this.state.dropdownOpen) {
      const { tags, noteId } = this.props

      return (
        <div className="tags-header-dropdown">

          <Link to="/tag/new" href="/tag/new">
            <div className="new-tag-item">

              <div id="new-tag-img" className="new-tag-child" />
              <button className="new-tag-child">Create new tag</button>
            </div>
          </Link>

          <TagsIndex
            noteTags={tags}
            noteId={noteId}
            sidebar={false}
            iiCallback="assign"
          />
        </div>
      )
    }
  }

  render() {
    const { modalIsOpen } = this.state
    const { tags, noteId } = this.props

    return (
      <div>
        <div className="tags-header" onClick={this.openModal}>
          <img
            alt=""
            id="tiny-tag"
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"
          />

          <h3>Tags</h3>

          <img
            alt=""
            id="dropdown-arrow"
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495502846/dropdown.png"
          />

        </div>

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebooks Header"
          className="tags-header-dropdown"
          overlayClassName="clear-overlay"
        >

          <Link to="/tag/new" href="/tag/new">
            <div className="new-tag-item">

              <div id="new-tag-img" className="new-tag-child" />
              <button className="new-tag-child">Create new tag</button>
            </div>
          </Link>

          <TagsIndex
            noteTags={tags}
            noteId={noteId}
            sidebar={false}
            iiCallback="assign"
          />

        </ReactModal>
      </div>
    )
  }
}

TagsHeader.propTypes = {
  tags: PropTypes.array.isRequired,
  noteId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}
