import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import TagsIndex from './tags_index';

class TagsSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
    this.props.fetchTags();
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

          <Link to="/tag/new">
            <button></button>
          </Link>
        </div>

        <TagsIndex
          tags={this.props.tags}
          noteId={this.props.noteId}
          iiCallback={'link'}
        />

        </ReactModal>
      </div>
    );
  }
}

export default TagsSidebar;
