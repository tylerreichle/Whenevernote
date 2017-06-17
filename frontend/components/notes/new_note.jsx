import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      notebook_id: 1,
      editorState: EditorState.createEmpty(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onChange = editorState => this.setState({ editorState });
    this.onTab = e => this._onTab(e);
    this.focus = () => this.refs.editor.focus();
  }

  componentDidMount() {
    this.focus();
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title.length < 1) {
      this.setState({ title: 'Untitled' });
    }

    const noteBody = convertToRaw(this.state.editorState.getCurrentContent());
    const body = JSON.stringify(noteBody);

    const note = {
      body,
      id: this.state.id,
      title: this.state.title,
      notebook_id: this.state.notebook_id,
      author_id: this.props.currentUser.id,
    };
    this.props.createNote(note);
    this.props.history.push("/notes");
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
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
            onClick={this.handleSubmit}
          >Create</button>

          <Link to="/notes">
            <button id="new-cancel">Cancel</button>
          </Link>
        </div>
        <div className="new-toolbar" />

        <form>
          <input
            id="new-title"
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.update('title')}
          />

          <div className="RichEditor-editor" onClick={this.focus}>
            <Editor
              editorState={editorState}
              onChange={this.onChange}
              onTab={this.onTab}
              placeholder="Just start typing..."
              spellCheck
              ref="editor"
            />
          </div>

        </form>
      </section>
    );
  }
}

export default withRouter(NewNote);
