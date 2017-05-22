import React from 'react';
import { Link } from 'react-router-dom';
import NotesIndexItem from '../notes/notes_index_item_container';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '', title: '', description: '', notes: [] };
  }

  componentWillMount() {
    this.props.fetchSingleNotebook(this.props.match.params.notebookId);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.id !== newProps.notebook.id) {
      this.state = newProps.notebook;
    }
  }

  render() {
    const { id, title, notes } = this.state;
    const notesCount = notes.length;

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
              <NotesIndexItem
                linkPath={`notebook/${id}/notes/${note.id}`}
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
