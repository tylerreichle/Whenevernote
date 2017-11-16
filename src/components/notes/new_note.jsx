import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'

class NewNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      notebook_id: 1,
      editorState: EditorState.createEmpty()
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.onChange = editorState => this.setState({ editorState })
    this.onTab = e => this._onTab(e)
    this.focus = () => this.refs.editor.focus()
  }

  componentDidMount() {
    this.focus()
  }

  handleSubmit(e) {
    e.preventDefault()

    const { id, title, notebook_id } = this.state
    const { currentUser, createNote, history } = this.props
    const noteBody = convertToRaw(this.state.editorState.getCurrentContent())
    const body = JSON.stringify(noteBody)

    const note = {
      id,
      body,
      title,
      notebook_id,
      author_id: currentUser.id
    }
    createNote(note)
    history.push('/notes')
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  _onTab(e) {
    const maxDepth = 4
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
  }

  render() {
    const { editorState, title } = this.state

    return (
      <section className="new-note">

        <div className="new-buttons">
          <button
            id="new-create"
            onClick={this.handleSubmit}
          >Create
          </button>

          <Link to="/notes" href="/notes">
            <button id="new-cancel">Cancel</button>
          </Link>
        </div>
        <div className="new-toolbar" />

        <form>
          <input
            id="new-title"
            type="text"
            value={title}
            placeholder="Title your note"
            onChange={this.update('title')}
          />

          <div className="RichEditor-editor" onClick={this.focus}>
            <Editor
              spellCheck
              ref="editor"
              onTab={this.onTab}
              onChange={this.onChange}
              editorState={editorState}
              placeholder="Just start typing..."
            />
          </div>

        </form>
      </section>
    )
  }
}

NewNote.propTypes = {
  currentUser: PropTypes.object,
  history: PropTypes.object.isRequired,
  createNote: PropTypes.func.isRequired
}

NewNote.defaultProps = {
  currentUser: {
    id: ''
  }
}

export default withRouter(NewNote)
