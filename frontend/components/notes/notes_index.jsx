import React from 'react';

class NotesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const notes = this.props.notes;
    return (
      <ul>
        {
          notes.map(note => (
            <li key={note.id}>{note.title}</li>
          ))
        }
      </ul>
    );
  }
}

export default NotesIndex;

// <li key={note.id}>
//   <h4>{note.title}</h4>
//   <p>{note.body}</p>
// </li>
