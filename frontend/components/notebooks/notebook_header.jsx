import React from 'react';

class NotebookHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  notebookMenu() {
    return (
      <div className="nb-header-dropdown">

      </div>
    );
  }

  toggleMenu(e) {
    e.preventDefault();
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
