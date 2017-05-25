import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks;
    const notesCount = this.props.notesCount;

    return (
      <div className="notebooks-index">
        <ul>
          {
            notebooks.map((notebook, idx) => (
              <NotebooksIndexItem
                notebook={notebook}
                note={this.props.note}
                updateNote={this.props.updateNote}
                iiCallback={this.props.iiCallback}
                notesCount={notesCount}
                key={idx}/>
            ))
          }
        </ul>
      </div>
    );

  }
}

export default NotebooksIndex;
