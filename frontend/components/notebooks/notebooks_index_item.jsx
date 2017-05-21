import React from 'react';

class NotebooksIndexItem extends React.Component {
  render() {
    const { id, title} = this.props.notebook;

    return (
      <li className="notebooks-ii">{title}</li>
    );
  }
}

export default NotebooksIndexItem;
