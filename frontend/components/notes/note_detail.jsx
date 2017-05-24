import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import NotebookHeader from '../notebooks/notebook_header_container';
import DeleteConfirmation from '../modals/delete_confirmation';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: '',
      notebook_id: '',
      editorState: EditorState.createEmpty()
    };

    this.update = this.update.bind(this);
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
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

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    } else {
      return 'not-handled';
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

          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange} />
          
        </form>
      </section>
    );
  }
}

reactMixin(NoteDetail.prototype, TimerMixin);

export default NoteDetail;
