import React from 'react';
import ReactModal from 'react-modal';

import NotebooksIndex from '../notebooks/notebooks_index_container';

class NotebooksModal extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
  // onAfterOpen={this.afterOpenModal}

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Notebooks</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebooks"
          className="nb-modal"
          overlayClassName="overlay"
        >

        <div className="nb-modal-header">
          <h3>NOTEBOOKS</h3>
          <button>+</button>
        </div>

        <NotebooksIndex />
        
      </ReactModal>
      </div>
    );
  }
}

export default NotebooksModal;
