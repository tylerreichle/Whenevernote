import React from 'react';
import NotesIndexItem from '../notes/notes_index_item_container';

class NotebookShow extends React.Component {

  componentWillMount() {
    this.props.fetchSingleNotebook(this.props.match.params.notebookId);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    const { title } = this.props.notebook;
    const notes = this.props.notes;
    const notesCount = notes.length;
    console.log(notes);

    return (
      <section className="notes-index">
        <div className="nb-show-header">
          <div className="nbs-header-top">
            <h2>{title}</h2>
          </div>
          <div className="nbs-header-bot">
            <h4>{notesCount} notes</h4>
          </div>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map((note, idx) => (
              <NotesIndexItem key={idx} initialNote={note} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default NotebookShow;
