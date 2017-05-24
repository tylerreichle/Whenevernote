import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { styleMap, blocksStyleFn } from './format_bar';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import NotebookHeader from '../notebooks/notebook_header_container';
import NoteInfo from '../modals/note_info';
import DeleteConfirmation from '../modals/delete_confirmation';
import NoteInfo from '../modals/note_info';
import StyleButton from './style_button';
import { BlockStyleControls, InlineStyleControls } from './format_bar';


class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: '',
      notebook_id: '',
      editorState: EditorState.createEmpty(),
      created_at: '',
      updated_at: ''
    };

    this.update = this.update.bind(this);
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = (command) => this._handleKeyCommand.bind(command);
    this.onTab = (e) => this._onTab(e);
    this.focus = () => this.refs.editor.focus();

    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
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

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  richTextToolbar() {
    const { editorState } = this.state;
    return (
      <div className="richtext-toolbar">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />

        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
      </div>
      );
    }

  richTextEditor() {
    const { editorState } = this.state;

    let className = 'RichEditor-editor';
    let contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += 'RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className={className} onClick={this.focus}>
        <Editor
          blocksStyleFn={blocksStyleFn}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          onTab={this.onTab}
          placeholder="Just start typing..."
          spellCheck={true}
          ref="editor"
        />
      </div>
    );
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
              title={this.state.title}
            />

          </div>

          <div className="note-options">
              <NotebookHeader
                updateNote={this.props.updateNote}
                notebookId={notebookId}
              />

            <div className="detail-tag">
              <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"/>
            </div>

            {this.richTextToolbar()}
          </div>
        </span>

        <form className="detail-form">
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}/>

          {this.richTextEditor()}

        </form>
      </section>
    );
  }
}

reactMixin(NoteDetail.prototype, TimerMixin);

export default NoteDetail;

// <NoteInfo
//   id={this.state.id}
//   title={this.state.title}
// />
