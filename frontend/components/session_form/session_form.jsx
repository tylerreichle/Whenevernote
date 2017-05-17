import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Errors from '../errors/errors_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    this.props.clearErrors();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  navLink() {
    if (this.props.formType === '/signin/') {
      return (
        <div className="form-nav-link">
          <h4>Don't have an account?</h4>
            <Link to="/">
              <button onClick={this.handleClick}>Create account</button>
            </Link>
        </div>
      );
    } else {
      return (
        <div className="form-nav-link">
          <h4>Already registered?</h4>
            <Link to="/signin/">
              <button onClick={this.handleClick}>Sign In</button>
            </Link>
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
        <section className="auth-comp">
          <h2>Remember Everything</h2>
          <h3>Inspiration strikes anywhere. Evernote lets you capture and nurture ideas whenevever you have them.</h3>

          <form className="auth-form">
            <div className="auth-inputs">
                <input
                  id="username"
                  type="text"
                  placeholder="Email"
                  value={this.state.username}
                  onChange={this.update('username')} />

                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </div>

            <button onClick={this.handleSubmit}>SIGN UP FOR FREE</button>
          </form>

          <Errors />
          {this.navLink()}
        </section>
      );
    }
  }
}

export default SessionForm;
