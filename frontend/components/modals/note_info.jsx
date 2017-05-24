import React from 'react';
import ReactModal from 'react-modal';

class NoteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentWillMount() { ReactModal.setAppElement('body'); }

  openModal() { this.setState({ modalIsOpen: true }); }
  closeModal() { this.setState({ modalIsOpen: false }); }

  handleSave(e) {
    e.preventDefault();
    // note update
  }

  render() {
      const id = this.props.id;
      const title = this.props.title;
      const createdAt = this.props.createdAt;
      const updatedAt = this.props.updatedAt;

    return (
      <div>
        <button
          title="Note Info"
          id="info"
          className="detail-button"
          onClick={this.openModal}></button>

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Note Info"
          className="info-modal"
          overlayClassName="overlay"
        >

        <div className="note-info">
          <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495221055/info.png"/>

          <h3>NOTE INFO</h3>
          <h2>{title}</h2>

          <h4>Overview</h4>
          <ul className="note-details">
            <li>
              <p>CREATED: {createdAt}</p>
            </li>
            <li>
              <p>UPDATED: {updatedAt}</p>
            </li>
          </ul>

          <div className="info-buttons">
            <button
              className="modal-cancel"
              onClick={this.closeModal}>Cancel</button>

            <button
              id="info-save"
              onClick={this.handleSave}>Save</button>
          </div>
        </div>

        </ReactModal>
      </div>
    );
  }
}

export default NoteInfo;
