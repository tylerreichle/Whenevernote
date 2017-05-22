import React from 'react';
import { Link } from 'react-router-dom';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.highlightedClass = this.highlightedClass.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchSingleNote(this.props.initialNote.id);
  }

  highlightedClass() {
    if (this.props.notePath === this.props.linkPath) {
      return "notes-index-item highlighted";
    } else {
      return "notes-index-item";
    }
  }

  render() {
    const { id, title, body, updated_at } = this.props.initialNote;
    const linkPath = this.props.linkPath;
    const lastUpdate = new Date(updated_at);

    return (
      <div onClick={this.handleClick} className={this.highlightedClass()}>
        <Link to={linkPath}>
          <li>
            <h4 className="preview-title ii-child">{title}</h4>
            <h5 className="preview-time ii-child">{lastUpdate.toDateString()}</h5>
            <p className="preview-body ii-child">{body}</p>
          </li>
        </Link>
      </div>
    );
  }
}

export default NotesIndexItem;
