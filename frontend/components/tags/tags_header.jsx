import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import TagsIndex from './tags_index_container';
import { selectTagIds } from '../../reducers/selectors';

class TagsHeader extends React.Component {
  constructor(props) {
    super(props);

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

  tagsMenu() {
    if (this.state.dropdownOpen) {
      return (
        <div className="tags-header-dropdown">

          <Link to="/tag/new">
            <div className="new-tag-item">

                <div id="new-tag-img" className="new-tag-child"></div>
                <button className="new-tag-child">Create new tag</button>
            </div>
          </Link>

          <TagsIndex
            noteTags={this.props.tags}
            noteId={this.props.noteId}
            iiCallback={'assign'}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="tags-header" onClick={this.openModal}>
          <img
            id="tiny-tag"
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"/>

          <h3>Tags</h3>

          <img
            id="dropdown-arrow"
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495502846/dropdown.png"/>

        </div>

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebooks Header"
          className="tags-header-dropdown"
          overlayClassName="clear-overlay">

          <Link to="/tag/new">
            <div className="new-tag-item">

                <div id="new-tag-img" className="new-tag-child"></div>
                <button className="new-tag-child">Create new tag</button>
            </div>
          </Link>

          <TagsIndex
            noteTags={this.props.tags}
            noteId={this.props.noteId}
            iiCallback={'assign'}
          />

        </ReactModal>
      </div>
    );
  }
}

export default TagsHeader;
