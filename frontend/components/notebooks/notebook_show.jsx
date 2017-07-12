import React from 'react';
import PropTypes from 'prop-types';
import NotesIndexItem from '../notes/notes_index_item_container';

export default class NotebookShow extends React.Component {

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
            notes.map(note => (
              <NotesIndexItem
                linkPath={`/notebook/${id}/notes/${note.id}`}
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

NotebookShow.propTypes = {
  fetchSingleNotebook: PropTypes.func.isRequired,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  notebook: PropTypes.object,
};
