import React from 'react';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleNote(this.props.initialNote.id);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchSingleNote(this.props.initialNote.id);
  }

  render() {
    const { title, body } = this.props.initialNote;

    return (
      <div onClick={this.handleClick} className="notes-index-item">
        <li>
          <h4>{title}</h4>
          <p>{body}</p>
        </li>
      </div>
    );
  }
}

export default NotesIndexItem;
