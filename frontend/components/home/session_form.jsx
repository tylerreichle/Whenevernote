import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Errors from '../errors/errors_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === '/signup/') {
      user = {
        user_sign_in: this.state.username,
        password: this.state.password
      };
    } else {
      user = Object.assign({}, this.state);
    }

    this.props.processForm(user).then(() => {
      this.props.history.push('/notes');
    });
  }

  handleDemo(e) {
    e.preventDefault();
    let username = 'demo';
    let password = 'password';

    for (let i = 0; i < username.length; i++) {
      setTimeout(() => this.setState(
        { username: username.slice(0, i + 1) }), (i * 100)
      );
    }

    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({password: password.slice(0, j + 1)}), ((j + 5) * 100));
    }

    const user = {
      user_sign_in: username,
      password: password
    };

    setTimeout(() => {
      this.props.processForm(user).then(() => {
        this.props.history.push('/notes');
      });
    }, 1500);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearErrors();

    if (this.props.formType === '/signup/') {
      this.props.history.push('/');
    } else {
      this.props.history.push('/signup/');
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  navLink() {
    if (this.props.formType === '/signup/') {
      return (
        <div className="form-nav-link">
          <h4>Already registered?</h4>
          <div>
            <button onClick={this.handleClick}>Sign In</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-nav-link">
          <h4>Don't have an account?</h4>
          <div>
            <button onClick={this.handleClick}>Create account</button>
          </div>
        </div>
      );
    }
  }

  submitButtons() {
    if (this.props.formType === '/signup/') {
      return (
        <div className="submit-buttons">
          <button
            id="signup"
            onClick={this.handleSubmit}>SIGN UP FOR FREE</button>
        </div>
      );

    } else {
      return (
        <div className="submit-buttons">
          <button onClick={this.handleDemo}>DEMO SIGN IN</button>
          <button onClick={this.handleSubmit}>SIGN IN</button>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="auth-comp">
        <h2>Remember Everything</h2>
        <h3>Inspiration strikes anywhere. Whenevernote lets you capture and nurture ideas whenevever you have them.</h3>

        <form className="auth-form">
          <div className="auth-inputs">
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')} />

            <input
              id="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')} />
          </div>

          {this.submitButtons()}
        </form>

        <Errors />
        {this.navLink()}
      </section>
    );
  }
}

export default SessionForm;

// <div className="or-divider">
//   <span className="divider"></span>
//   <span>or</span>
//   <span className="divider"></span>
// </div>
