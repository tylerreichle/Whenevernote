import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotesIndexItem from '../notes/notes_index_item_container';

class NotebookShow extends React.Component {

  componentDidMount() {
    this.props.fetchSingleNotebook(this.props.match.params.notebookId)
      .then(() => {
        this.props.history.push(`/notebook/${this.props.notebook.id}/notes/${this.props.notebook.notes[0].id}`);
      });
  }

  render() {
    const id = this.props.notebook.id || '';
    const title = this.props.notebook.title || '';
    const notes = this.props.notebook.notes || [];
    const notesCount = notes.length;

    return (
      <section className="notebook-show">
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
              <NotesIndexItem
                linkPath={`/notebook/${id}/notes/${note.id}`}
                notePath={this.props.location.pathname}
                key={idx}
                initialNote={note} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default NotebookShow;
