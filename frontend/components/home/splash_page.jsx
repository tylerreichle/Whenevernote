import React from 'react';
import { Link, Route } from 'react-router-dom';
import SessionForm from './session_form_container';

export default class SplashPage extends React.Component {
  header() {
    return (
      <header>
        <div className="left-nav">
          <img
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495083594/header-logo.png"
            alt="Whenevernote logo"
          />
          <h1>WHENEVERNOTE</h1>
        </div>

        <div className="header-nav-links">
          <Link to="/">Sign In</Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tylerreichle/Whenevernote"
          >Github</a>
        </div>
      </header>
    );
  }

  footer() {
    return (
      <footer>
        <h3>Join <span className="green">tens</span> of people who rely on Whenevernote to get more things done every day.</h3>
      </footer>
    );
  }

  splashVid() {
    return (
      <div className="bg-video">
        <video
          autoPlay="autoplay"
          loop="loop"
          poster="https://cdn1.evernote.com/evernote.com/img/homepage/homepage-hero-video-desktop-still.jpg">
          <source
            className="webm"
            type="video/webm"
            src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.webm" />
          <source
            className="mp4"
            type="video/mp4"
            src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.mp4" />
        </video>
      </div>
    );
  }

  render() {
    return (
      <div className="splash-container">
        {this.header()}

        <section className="main-content">
          <Route exact path="/signup/" component={SessionForm} />
          <Route exact path="/" component={SessionForm} />
        </section>

        {this.footer()}
        {this.splashVid()}
      </div>
    );
  }
}
// aws links
// https://s3-us-west-1.amazonaws.com/whenevernote/splash.mp4
// https://s3-us-west-1.amazonaws.com/whenevernote/splash.webm
