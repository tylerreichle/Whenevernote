import React from 'react';
import { Link } from 'react-router-dom';

import NotebooksIndex from './notebooks_index_container';

class NotebookHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.notebookId !== newProps.notebookId) {
      this.props.fetchSingleNotebook(newProps.notebookId);
    }
  }

  notebookMenu() {
    if (this.state.dropdownOpen) {
      return (
        <div className="nb-header-dropdown">

          <Link to="/notebook/new">
            <div className="new-nb-item">

                <div id="new-nb-img" className="new-nb-child"></div>
                <button className="new-nb-child">Create new notebook</button>
            </div>
          </Link>

          <NotebooksIndex
            note={this.props.note}
            updateNote={this.props.updateNote}
            iiCallback={'assign'}
            notesCount={false}/>
        </div>
      );
    }
  }

  toggleMenu(e) {
    e.preventDefault();
    if (this.state.dropdownOpen) {
      this.setState({ dropdownOpen: false });
    } else {
      this.setState({ dropdownOpen: true });
    }
  }

  render() {
    const title = this.props.notebook.title || '';

    return (
      <div className="nb-header" onClick={this.toggleMenu}>
        <img
          id="tiny-notebook"
          src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"/>

        <h3>{title}</h3>

        <img
          id="dropdown-arrow"
          src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495502846/dropdown.png"/>

        {this.notebookMenu()}
      </div>
    );
  }
}

export default NotebookHeader;
