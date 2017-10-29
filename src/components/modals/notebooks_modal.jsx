import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal'

import NotebooksIndex from '../notebooks/notebooks_index'

export default class NotebooksModal extends Component {
  constructor(props) {
    super(props)

    this.state = { modalIsOpen: false }
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
    return (
      <div>
        <button
          className="circle-button"
          id="notebooks"
          onClick={this.openModal}
        />

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebooks"
          className="nb-modal"
          overlayClassName="clear-overlay"
        >

          <div className="nb-modal-header">
            <h3>NOTEBOOKS</h3>

            <Link to="/notebook/new">
              <button />
            </Link>
          </div>

          <NotebooksIndex notesCount={false} iiCallback={'link'} />

        </ReactModal>
      </div>
    )
  }
}
