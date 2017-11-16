import React, { Component } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

export default class NoteInfo extends Component {
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

  render() {
    const { title } = this.props
    const { modalIsOpen } = this.state

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

    const createdAt = new Date(this.props.createdAt).toLocaleString('en-us', options)
    const updatedAt = new Date(this.props.updatedAt).toLocaleString('en-us', options)

    return (
      <div>
        <button
          title="Note Info"
          id="info"
          className="detail-button"
          onClick={this.openModal}
        />

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Note Info"
          className="info-modal"
          overlayClassName="overlay"
        >

          <div className="note-info">
            <img alt="note info" src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495221055/info.png" />

            <h2>NOTE INFO</h2>
            <h3>{title}</h3>

            <div className="note-details">
              <h4>Overview</h4>
              <ul>
                <li>
                  <label htmlFor="created-at" >
                    CREATED:
                  </label>
                  <p id="created-at">{createdAt}</p>
                </li>
                <li>
                  <label htmlFor="updated-at">
                  UPDATED:
                  </label>
                  <p id="updated-at">{updatedAt}</p>
                </li>
              </ul>
            </div>

            <div className="info-buttons">
              <button
                className="modal-close"
                onClick={this.closeModal}
              >Close
              </button>

            </div>
          </div>

        </ReactModal>
      </div>
    )
  }
}

NoteInfo.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
}
