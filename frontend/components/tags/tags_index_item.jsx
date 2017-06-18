import React from 'react';
import { withRouter } from 'react-router-dom';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.callbackAction = this.callbackAction.bind(this);
  }

  callbackAction() {
    if (this.props.iiCallback === 'link') {
      this.props.history.push(`/tag/${this.props.tag.id}/notes`);
    } else if (this.props.iiCallback === 'assign') {
      const taggedNote = {
        note_id: this.props.noteId,
        tag_id: this.props.tag.id,
      };
      if (this.props.tagged) {
        this.props.deleteTaggedNote(taggedNote);
      } else {
        this.props.createTaggedNote(taggedNote);
      }
    }
  }

  render() {
    const { name } = this.props.tag;
    let className = 'tags-ii';

    if (this.props.tagged) {
      className += ' tagged';
    }

    return (
      <li onClick={this.callbackAction} className={className}>
        <h4 className="tag-ii-child">{name}</h4>
      </li>
    );
  }
}

export default withRouter(NotebooksIndexItem);
