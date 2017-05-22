import React from 'react';
import { Link } from 'react-router-dom';
import NotebooksModal from '../modals/notebooks_modal';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.signout();
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-top">
          <img
            src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495083594/header-logo.png"
            alt="Whenevernote logo" />

          <Link
            to="/note/new"
            title="NEW NOTE"
            id="new-note"
            className="circle-button">+</Link>

        </div>

        <div className="sidebar-mid">
          <NotebooksModal />
        </div>

        <div className="sidebar-bot">
        <Link
          to="/"
          title="SIGN OUT"
          id="signout"
          className="circle-button"
          onClick={this.handleClick}>-</Link>
      </div>
      </aside>
    );
  }
}

export default Sidebar;
