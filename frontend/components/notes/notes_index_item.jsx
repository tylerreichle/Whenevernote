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

    $('.highlighted').removeClass('highlighted');
    $(e.currentTarget).addClass('highlighted');

    this.props.fetchSingleNote(this.props.initialNote.id);
  }

  render() {
    const { title, body, updated_at } = this.props.initialNote;
    // TODO: last update in preview time
    // const lastUpdate = new Date(updated_at);

    return (
      <div onClick={this.handleClick} className="notes-index-item">
        <li>
          <h4 className="preview-title ii-child">{title}</h4>
          <h5 className="preview-time ii-child">WHENEVER</h5>
          <p className="preview-body ii-child">{body}</p>
        </li>
      </div>
    );
  }
}

export default NotesIndexItem;
