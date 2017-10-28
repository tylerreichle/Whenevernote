import React from 'react';
import NotesIndexItem from './notes_index_item_container';

export default class NotesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotes().then(() => {
      this.props.history.push(`/notes/${this.props.notes[0].id}`);
    });
  }

  render() {
    const notes = this.props.notes;
    const notesCount = notes.length;

    return (
      <section className="notes-index">
        <div className="notes-header">
          <h2>NOTES</h2>
          <h4>{notesCount} notes</h4>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map(note => (
              <NotesIndexItem
                linkPath={`/notes/${note.id}`}
                notePath={this.props.location.pathname}
                key={note.id}
                initialNote={note}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}
