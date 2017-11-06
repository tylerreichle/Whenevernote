import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ReactModal from 'react-modal'
import TagsIndex from './tags_index_container'

export default class TagsSidebar extends Component {
  constructor(props) {
    super(props)

    this.state = { modalIsOpen: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    ReactModal.setAppElement('body')
  }

  componentDidMount() {
    this.props.fetchTags()
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { tags, noteId } = this.props

    return (
      <div>
        <button
          id="tags"
          title="TAGS"
          className="circle-button"
          onClick={this.openModal}
        />

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Tags"
          className="tags-panel"
          overlayClassName="clear-overlay"
        >

          <div className="tags-panel-header">
            <h3>TAGS</h3>

            <Link to="/tag/new" href="/tag/new">
              <button />
            </Link>
          </div>

          <TagsIndex
            sidebar
            tags={tags}
            noteId={noteId}
            iiCallback="link"
          />

        </ReactModal>
      </div>
    )
  }
}

TagsSidebar.propTypes = {
  noteId: PropTypes.number,
  tags: PropTypes.array.isRequired,
  fetchTags: PropTypes.func.isRequired
}

TagsSidebar.defaultProps = {
  noteId: 0
}
