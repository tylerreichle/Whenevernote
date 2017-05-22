import React from 'react';
import { Link } from 'react-router-dom';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    $('.highlighted').removeClass('highlighted');
    $(e.currentTarget).addClass('highlighted');

    this.props.fetchSingleNote(this.props.initialNote.id);
  }

  render() {
    const { id, title, body, updated_at } = this.props.initialNote;
    const linkPath = this.props.linkPath;
    // TODO: last update in preview time
    // const lastUpdate = new Date(updated_at);

    return (
      <div onClick={this.handleClick} className="notes-index-item">
        <Link to={linkPath}>
          <li>
            <h4 className="preview-title ii-child">{title}</h4>
            <h5 className="preview-time ii-child">WHENEVER</h5>
            <p className="preview-body ii-child">{body}</p>
          </li>
        </Link>
      </div>
    );
  }
}

export default NotesIndexItem;
