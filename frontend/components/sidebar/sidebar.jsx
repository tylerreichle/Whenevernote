import React from 'react';
import { Link } from 'react-router-dom';

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
        <img
          src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495083594/header-logo.png"
          alt="Whenevernote logo" />
        <Link to="/note/new">
          <button>New Note</button>
        </Link>
        <button onClick={this.handleClick}>Sign Out</button>
      </aside>
    );
  }
}

export default Sidebar;
