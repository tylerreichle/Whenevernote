import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.callbackAction = this.callbackAction.bind(this);
  }

  // notesCount() {
  //   let noteCount = 0;
  //   if (this.props.notesCount) {
  //     if (this.props.notebook.notes) {
  //       noteCount = this.props.notebook.notes.length;
  //     }
  //     return <h5 className="nb-ii-child">{noteCount} notes</h5>;
  //   }
  // }

  callbackAction() {
    if (this.props.iiCallback === 'link') {
      this.props.history.push(`/tags/${this.props.tag.id}/notes`);

    } else if (this.props.iiCallback === 'assign') {
      const taggedNote = {
          note_id: this.props.noteId,
          tag_id: this.props.tag.id
      };
      this.props.createTaggedNote(taggedNote);
    }
  }

  render() {
    const { name } = this.props.tag;

    return (
      <li onClick={this.callbackAction} className="tags-ii">
        <h4 className="tag-ii-child">{name}</h4>
      </li>
    );
  }
}

export default withRouter(NotebooksIndexItem);
