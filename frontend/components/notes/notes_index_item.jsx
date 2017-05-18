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
    this.props.fetchSingleNote(this.props.initialNote.id);
  }

  render() {
    const { title, body } = this.props.initialNote;

    return (
      <li onClick={this.handleClick}>
        <h4>{title}</h4>
        <p>{body}</p>
      </li>
    );
  }
}

export default NotesIndexItem;
