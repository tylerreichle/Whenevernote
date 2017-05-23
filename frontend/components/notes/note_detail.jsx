import React from 'react';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import NotebookHeader from '../notebooks/notebook_header_container';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '', title: '', body: '', notebook_id: ''};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleNote(this.props.match.params.noteId).then(() => {
      this.props.fetchSingleNotebook(this.props.note.notebook_id);
    });
  }

  componentDidMount() {
    this.setInterval( () => {
      this.autoSave();
      console.log('autosaved');
    }, 10000 );
  }

  componentWillReceiveProps(newProps) {
    if (this.state.id !== newProps.note.id) {
      this.setState(newProps.note);
    } else if (this.state.notebook_id !== newProps.note.notebook_id) {
      this.setState(newProps.note);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    this.props.updateNote(note);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNote(this.state.id);
    this.props.history.push('/notes');
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  autoSave() {
    if (this.state.title !== this.props.note.title) {
      const note = Object.assign({}, this.state);
      this.props.updateNote(note);
    } else if (this.state.body !== this.props.note.body) {
      const note = Object.assign({}, this.state);
      this.props.updateNote(note);
    }
  }

  render() {
    const { title, body } = this.state;
    const notebookId = this.state.notebook_id;

    return (
      <section className="note-detail">
        <span className="detail-toolbar">

          <div className="detail-buttons">
            <button
              title="Note Detail"
              id="info"
              className="detail-button" />

            <button
              title="Delete Note"
              id="trash"
              className="detail-button"
              onClick={this.handleDelete} />
          </div>

          <div className="note-options">
              <NotebookHeader
                updateNote={this.props.updateNote}
                notebookId={notebookId}/>

            <div className="detail-tag">
              <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"/>
            </div>

          </div>
        </span>

        <form className="detail-form" onSubmit={this.handleSubmit}>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}/>

          <textarea
            id="body"
            rows="10"
            cols="50"
            value={this.state.body}
            onChange={this.update('body')}/>

          <input type="submit"/>
        </form>
      </section>
    );
  }
}

reactMixin(NoteDetail.prototype, TimerMixin);

export default NoteDetail;
