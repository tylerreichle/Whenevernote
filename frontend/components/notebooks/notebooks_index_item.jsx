import React from 'react';
import { Link } from 'react-router-dom';

class NotebooksIndexItem extends React.Component {
  render() {
    const { id, title } = this.props.notebook;

    return (
      <Link to={`/notebook/${id}/notes`}>
        <li className="notebooks-ii">
          <h4 className="nb-ii-child">{title}</h4>
          <h5 className="nb-ii-child">0 notes</h5>
        </li>
      </Link>
    );
  }
}

export default NotebooksIndexItem;
