import React from 'react';
import NotesIndexItem from '../notes/notes_index_item_container';

export default class TagShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleTag(this.props.match.params.tagId)
      .then(() => {
        this.props.history.push(`/tag/${this.props.tag.id}/notes/${this.props.tag.notes[0].id}`);
      });
  }

  render() {
    const id = this.props.tag.id || '';
    const name = this.props.tag.name || '';
    const notes = this.props.tag.notes || [];
    const notesCount = notes.length;

    return (
      <section className="tag-show">
        <div className="tag-show-header">
          <div className="tag-header-top">
            <h2>{name}</h2>
          </div>
          <div className="tag-header-bot">
            <h4>{notesCount} notes</h4>
          </div>
        </div>

        <ul className="notes-index-scroll">
          {
            notes.map(note => (
              <NotesIndexItem
                linkPath={`/tag/${id}/notes/${note.id}`}
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
