import React from 'react';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import NotebookHeader from '../notebooks/notebook_header_container';
import NoteInfo from '../modals/note_info';
import DeleteConfirmation from '../modals/delete_confirmation';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: '',
      notebook_id: '',
      created_at: '',
      updated_at: ''
    };

    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleNote(this.props.match.params.noteId).then(() => {
      this.props.fetchSingleNotebook(this.props.note.notebook_id);
    });
  }

  componentDidMount() {
    this.setInterval( () => {
      this.autoSave();
    }, 5000 );
  }

  componentWillReceiveProps(newProps) {
    if (this.state.id !== newProps.note.id) {
      this.setState(newProps.note);
    } else if (this.state.notebook_id !== newProps.note.notebook_id) {
      this.setState(newProps.note);
    }
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
    const {
      id,
      title,
      body,
    } = this.state;
    const notebookId = this.state.notebook_id;
    const createdAt = this.state.created_at;
    const updatedAt = this.state.updated_at;

    return (
      <section className="note-detail">
        <span className="detail-toolbar">

          <div className="detail-buttons">
            <NoteInfo
              id={id}
              title={title}
              updatedAt={updatedAt}
              createdAt={createdAt}
            />

            <DeleteConfirmation
              deleteNote={this.props.deleteNote}
              id={this.state.id}
              title={this.state.title} />

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

        <form className="detail-form">
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
        </form>
      </section>
    );
  }
}

reactMixin(NoteDetail.prototype, TimerMixin);

export default NoteDetail;
