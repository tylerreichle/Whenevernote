import React from 'react';
import NotesIndexItem from './notes_index_item_container';

class NotesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const notes = this.props.notes;
    return (
      <section className="notes-index">
        <div className="notes-header">
          <h2>Notes</h2>
          <h4>33 notes</h4>
        </div>
        <ul>
          {
            notes.map(note => (
              <NotesIndexItem key={note.id} initialNote={note}/>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default NotesIndex;
