import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { signout } from '../../actions/session_actions'

import NotebooksModal from '../modals/notebooks_modal'
import TagsSidebar from '../tags/tags_sidebar_container'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.signout()
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-top">
          <Link to="/notes" href="/notes" title="HOME">
            <img
              src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1498685204/logo.png"
              alt="Whenevernote logo"
            />
          </Link>

          <Link
            id="new-note"
            to="/notes/new"
            href="/notes/new"
            title="NEW NOTE"
            className="circle-button"
          />

        </div>

        <div className="sidebar-mid">
          <Link
            id="notes"
            to="/notes"
            href="/notes"
            title="NOTES"
            className="circle-button"
          />

          <NotebooksModal />

          <TagsSidebar />
        </div>

        <div className="sidebar-bot">
          <Link
            to="/"
            href="/"
            id="signout"
            title="SIGN OUT"
            className="circle-button"
            onClick={this.handleClick}
          />
        </div>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  signout: PropTypes.func.isRequired
}

// Connect

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
