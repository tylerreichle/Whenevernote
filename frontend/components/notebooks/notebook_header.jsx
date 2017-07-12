import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import NotebooksIndex from './notebooks_index_container';

export default class NotebookHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.notebookId !== newProps.notebookId) {
      this.props.fetchSingleNotebook(newProps.notebookId);
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const title = this.props.notebook.title || '';

    return (
      <div>
        <div className="nb-header" onClick={this.openModal}>
          <img
            alt=""
            id="tiny-notebook"
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"
          />

          <h3>{title}</h3>

          <img
            alt=""
            id="dropdown-arrow"
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495502846/dropdown.png"
          />
        </div>

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebooks Header"
          className="nb-header-dropdown"
          overlayClassName="clear-overlay"
        >

          <Link to="/notebook/new">
            <div className="new-nb-item">

              <div id="new-nb-img" className="new-nb-child" />
              <button className="new-nb-child">Create new notebook</button>
            </div>
          </Link>

          <NotebooksIndex
            note={this.props.note}
            updateNote={this.props.updateNote}
            iiCallback={'assign'}
            notesCount={false}
          />

        </ReactModal>
      </div>
    );
  }
}

NotebookHeader.propTypes = {
  fetchSingleNotebook: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  notebook: PropTypes.object.isRequired,
  notebookId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NotebookHeader.defaultProps = {
  notebookId: null,
};
