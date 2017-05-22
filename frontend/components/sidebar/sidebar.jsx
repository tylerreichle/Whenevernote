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
          <Link
            to="/"
            title="HOME">
            <img
              src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495424859/sidebar/logo-small.png"
              alt="Whenevernote logo" />
          </Link>

          <Link
            to="/note/new"
            title="NEW NOTE"
            id="new-note"
            className="circle-button"></Link>

        </div>

        <div className="sidebar-mid">
          <Link
            to="/"
            title="NOTES"
            id="notes"
            className="circle-button"></Link>

          <NotebooksModal />

          <Link
            to="/"
            title="TAGS"
            id="tags"
            className="circle-button"></Link>
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
