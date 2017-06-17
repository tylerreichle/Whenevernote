import React from 'react';
import { Link } from 'react-router-dom';
import NotebooksModal from '../modals/notebooks_modal';
import TagsSidebar from '../tags/tags_sidebar_container';

export default class Sidebar extends React.Component {
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
          <Link to="/notes" title="HOME">
            <img
              src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495424859/sidebar/logo-small.png"
              alt="Whenevernote logo"
            />
          </Link>

          <Link
            to="/notes/new"
            title="NEW NOTE"
            id="new-note"
            className="circle-button"
          />

        </div>

        <div className="sidebar-mid">
          <Link
            to="/notes"
            title="NOTES"
            id="notes"
            className="circle-button"
          />

          <NotebooksModal />

          <TagsSidebar />
        </div>

        <div className="sidebar-bot">
          <Link
            to="/"
            title="SIGN OUT"
            id="signout"
            className="circle-button"
            onClick={this.handleClick}
          />
        </div>
      </aside>
    );
  }
}
