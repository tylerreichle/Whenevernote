import React from 'react';
import isEqual from 'lodash/isequal';
import NotesIndexItem from './notes_index_item_container';

class NotesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const notes = this.props.notes;
    const notesCount = this.props.notes.length;
    return (
      <section className="notes-index">
        <div className="notes-header">
          <h2>NOTES</h2>
          <h4>{notesCount} notes</h4>
        </div>

        <ul className="notes-index-scroll">
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
