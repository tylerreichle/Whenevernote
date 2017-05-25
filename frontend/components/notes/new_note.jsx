import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from 'draft-js';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
       body: '',
       notebook_id: 1,
       editorState: EditorState.createEmpty()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = (command) => this._handleKeyCommand.bind(command);
    this.onTab = (e) => this._onTab(e);
    this.focus = () => this.refs.editor.focus();
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title.length < 1) {
      this.setState({ title: 'Untitled' });
    }

    const noteBody = convertToRaw(this.state.editorState.getCurrentContent());
    const body = JSON.stringify(noteBody);

    const note = {
      id: this.state.id,
      title: this.state.title,
      body: body,
      notebook_id: this.state.notebook_id,
      author_id: this.props.currentUser.id
    };
    this.props.createNote(note);
    this.props.history.push("/notes");
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  _handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    } else {
      return 'not-handled';
    }
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  render() {
    const { editorState } = this.state;

    return (
      <section className="new-note">

        <div className="new-buttons">
          <button
            id="new-create"
            onClick={this.handleSubmit}>Create</button>

          <Link to="/notes">
            <button id="new-cancel">Cancel</button>
          </Link>
        </div>
        <div className="new-toolbar">

        </div>

        <form>
          <input
            id="new-title"
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.update('title')}/>

          <div className="RichEditor-editor" onClick={this.focus}>
              <Editor
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                onTab={this.onTab}
                placeholder="Just start typing..."
                spellCheck={true}
                ref="editor"
              />
            </div>

        </form>
      </section>
    );
  }
}

export default withRouter(NewNote);
