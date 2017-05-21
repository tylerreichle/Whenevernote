import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {

  componentWillMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks;

    return (
      <div className="noteboooks-index">
        <ul>
          {
            notebooks.map((notebook, idx) => (
              <NotebooksIndexItem
                notebook={notebook}
                key={idx}/>
            ))
          }
        </ul>
      </div>
    );

  }
}

export default NotebooksIndex;
