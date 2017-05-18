import React from 'react';
import NotesIndexItem from './notes_index_item_container';

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
            <NotesIndexItem key={note.id} initialNote={note}/>
          ))
        }
      </ul>
    );
  }
}

export default NotesIndex;
