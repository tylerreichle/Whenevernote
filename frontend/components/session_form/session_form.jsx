import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Errors from '../errors/errors_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === '/signin/') {
      user = {
        user_sign_in: this.state.username,
        password: this.state.password
      };
    } else {
      user = Object.assign({}, this.state);
    }

    this.props.processForm(user);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  navLink() {
    if (this.props.formType === '/signin/') {
      return (
        <div>
          <p>Don't have an account?</p>
          <Link to="/">Create account</Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>Already registered?</p>
          <Link to="/signin/">Sign In</Link>
        </div>
      );
    }
  }

  emailInput() {
    if (this.props.formType === '/') {
      return (
        <label>Email:
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.update('email')} />
        </label>
      );
    }
  }

  render() {
    const { loggedIn, formType } = this.props;
    const headerType = (formType === '/signin/') ? 'Sign In' : 'Sign Up';
    const linkToType = (formType === '/signin/') ? 'Sign Up' : 'Log In';

    if (loggedIn) {
      return (
        <Redirect to='/' />
      );
    } else {
      return (
        <div className="auth-comp">
          <h2>{headerType}</h2>

          <form className="auth-form" onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />

            {this.emailInput()}

            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />

            <input type="submit" />
          </form>

          <Errors />
          {this.navLink()}
        </div>
      );
    }
  }
}

export default SessionForm;
