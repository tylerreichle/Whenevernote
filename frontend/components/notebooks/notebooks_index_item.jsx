import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.callbackAction = this.callbackAction.bind(this);
  }

  notesCount() {
    let noteCount = 0;
    if (this.props.notesCount) {
      if (this.props.notebook.notes) {
        noteCount = this.props.notebook.notes.length;
      }
      return <h5 className="nb-ii-child">{noteCount} notes</h5>;
    }
  }

  callbackAction() {
    if (this.props.iiCallback === 'link') {
      this.props.history.push(`/notebook/${this.props.notebook.id}/notes`);
    } else if (this.props.iiCallback === 'assign') {
      const newNotebook = { notebook_id: this.props.notebook.id };
      const updatedNote = merge({}, this.props.note, newNotebook);

      this.props.updateNote(updatedNote);
    }
  }

  render() {
    const { title } = this.props.notebook;

    return (
      <li onClick={this.callbackAction} className="notebooks-ii">
        <h4 className="nb-ii-child">{title}</h4>
        {this.notesCount()}
      </li>
    );
  }
}

NotebooksIndexItem.propTypes = {
  history: PropTypes.object.isRequired,
  updateNote: PropTypes.func.isRequired,
  notesCount: PropTypes.bool.isRequired,
  note: PropTypes.object.isRequired,
  notebook: PropTypes.object.isRequired,
  iiCallback: PropTypes.string.isRequired,
};

export default withRouter(NotebooksIndexItem);
