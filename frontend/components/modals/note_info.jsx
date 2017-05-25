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

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
   }

  handleSave(e) {
    e.preventDefault();
    // note update
  }

  render() {
    const id = this.props.id;
    const title = this.props.title;

    const options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    const createdAt = new Date(this.props.createdAt)
      .toLocaleString('en-us', options);
    const updatedAt = new Date(this.props.updatedAt)
      .toLocaleString('en-us', options);

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

          <h2>NOTE INFO</h2>
          <h3>{title}</h3>

          <div className="note-details">
            <h4>Overview</h4>
            <ul>
              <li>
                <label>CREATED:</label>
                <p>{createdAt}</p>
              </li>
              <li>
                <label>UPDATED:</label>
                <p>{updatedAt}</p>
              </li>
            </ul>
          </div>

          <div className="info-buttons">
            <button
              className="modal-close"
              onClick={this.closeModal}>Close</button>

          </div>
        </div>

        </ReactModal>
      </div>
    );
  }
}

export default NoteInfo;

// TODO: update note?

// <button
//   id="info-save"
//   onClick={this.handleSave}>Save</button>
