import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import NotebooksIndex from '../notebooks/notebooks_index_container';

class NotebooksModal extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button
          className="circle-button"
          id="notebooks"
          onClick={this.openModal}></button>

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebooks"
          className="nb-modal"
          overlayClassName="overlay"
        >

        <div className="nb-modal-header">
          <h3>NOTEBOOKS</h3>

          <Link to="/notebook/new">
            <button></button>
          </Link>
        </div>

        <NotebooksIndex />

      </ReactModal>
      </div>
    );
  }
}

export default NotebooksModal;
