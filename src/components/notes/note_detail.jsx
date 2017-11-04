import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'

import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  DefaultDraftBlockRenderMap
} from 'draft-js'

import {
  blockRenderMap,
  CheckableListItem,
  CheckableListItemUtils,
  CHECKABLE_LIST_ITEM
} from 'draft-js-checkable-list-item'

import {
  BlockStyleControls,
  InlineStyleControls,
  styleMap,
  blocksStyleFn
} from './format_bar'

import NotebookHeader from '../notebooks/notebook_header_container'
import TagsHeader from '../tags/tags_header'
import NoteInfo from '../modals/note_info'
import DeleteConfirmation from '../modals/delete_confirmation'

export default class NoteDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      notebook_id: '',
      tags: [],
      editorState: EditorState.createEmpty(),
      created_at: '',
      updated_at: ''
    }

    this.update = this.update.bind(this)
    this.onChange = editorState => this.setState({ editorState })
    this.handleKeyCommand = command => this._handleKeyCommand.bind(command)
    this.onTab = e => this._onTab(e)
    this.focus = () => this.refs.editor.focus()

    this.toggleBlockType = type => this._toggleBlockType(type)
    this.toggleInlineStyle = style => this._toggleInlineStyle(style)
    this.blockRendererFn = this.blockRendererFn.bind(this)

    // this.seedCreate = this.seedCreate.bind(this);
  }

  componentDidMount() {
    const {
      note,
      match,
      fetchSingleNote,
      fetchSingleNotebook
    } = this.props

    fetchSingleNote(match.params.noteId).then(() => {
      fetchSingleNotebook(note.notebook_id)
      this.convertFromDB(note)
    })

    this.setInterval(() => {
      this.autoSave()
    }, 5000)
  }

  // update on NB change and new note
  componentWillReceiveProps(newProps) {
    if ((this.state.id !== newProps.note.id) ||
        (this.state.notebook_id !== newProps.note.notebook_id) ||
        (this.state.tags.length !== newProps.note.tags.length)) {
      if (this.state.id !== '') {
        this.autoSave()
      }
      this.setState(newProps.note)
      this.convertFromDB(newProps.note)
    }
  }

  componentWillUnmount() {
    this.autoSave()
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  // seedCreate() {
  //   const noteBody = convertToRaw(this.state.editorState.getCurrentContent());
  //   const body = JSON.stringify(noteBody);
  //   console.log(body);
  // }
  // <button onClick={this.seedCreate}>seeds</button>

  // auto save on body/title change
  autoSave() {
    const noteBody = convertToRaw(this.state.editorState.getCurrentContent())
    const body = JSON.stringify(noteBody)

    if ((this.state.title !== this.props.note.title) || (body !== this.props.note.body)) {
      const note = {
        body,
        id: this.state.id,
        title: this.state.title,
        notebook_id: this.state.notebook_id
      }
      this.props.updateNote(note)
    }
  }

  _handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  blockRendererFn(contentBlock) {
    if (contentBlock.getType() === CHECKABLE_LIST_ITEM) {
      return {
        component: CheckableListItem,
        props: {
          onChangeChecked: () => this.onChange(
            CheckableListItemUtils.toggleChecked(this.state.editorState, contentBlock),
          ),
          checked: Boolean(contentBlock.getData().get('checked'))
        }
      }
    }
  }

  _onTab(e) {
    const maxDepth = 4
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, blockType),
    )
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
    )
  }

  convertFromDB(note) {
    if (note.body) {
      const contentState = convertFromRaw(JSON.parse(note.body))
      this.setState({ editorState: EditorState.createWithContent(contentState) })
    }
  }

  richTextToolbar() {
    const { editorState } = this.state
    return (
      <div className="richtext-toolbar">
        <div className="toolbar-divider" />

        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />

        <div className="toolbar-divider" />

        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />

      </div>
    )
  }

  richTextEditor() {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    let className = 'RichEditor-editor'

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += 'RichEditor-hidePlaceholder'
      }
    }

    return (
      <div className={className} onClick={this.focus}>
        <Editor
          blocksStyleFn={blocksStyleFn}
          blockRendererFn={this.blockRendererFn}
          blockRenderMap={DefaultDraftBlockRenderMap.merge(blockRenderMap)}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          onTab={this.onTab}
          placeholder="Just start typing..."
          ref="editor"
        />
      </div>
    )
  }

  render() {
    const { id, title, tags } = this.state
    const { deleteNote, updateNote } = this.props
    const notebookId = this.state.notebook_id
    const createdAt = this.state.created_at
    const updatedAt = this.state.updated_at

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
              id={id}
              title={title}
              deleteNote={deleteNote}
            />
          </div>

          <div className="note-options">
            <NotebookHeader
              updateNote={updateNote}
              notebookId={notebookId}
            />

            <TagsHeader
              iiCallback="assign"
              tags={tags}
              noteId={id}
            />

            {this.richTextToolbar()}
          </div>
        </span>

        <form className="detail-form">
          <input
            id="title"
            type="text"
            value={title}
            onChange={this.update('title')}
          />

          {this.richTextEditor()}

        </form>
      </section>
    )
  }
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  fetchSingleNote: PropTypes.func.isRequired,
  fetchSingleNotebook: PropTypes.func.isRequired
}

reactMixin(NoteDetail.prototype, TimerMixin)
