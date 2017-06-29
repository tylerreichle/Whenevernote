import React from 'react';
import { Route } from 'react-router-dom';
import SessionForm from './session_form_container';

export default class SplashPage extends React.Component {
  header() {
    return (
      <header>
        <div className="left-nav">
          <img
            src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1498685204/logo.png"
            alt="Whenevernote logo"
          />
          <h1>WHENEVERNOTE</h1>
        </div>

        <div className="header-nav-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tylerreichle/Whenevernote"
          >Github</a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tyler-reichle-36b379130/"
          >LinkedIn</a>
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
          poster="https://d1235ca2z646oc.cloudfront.net/thumbnails/255/MadeInLadakh-HD_3.mp4-poster.png"
        >
          <source
            className="webm"
            type="video/webm"
            src="https://d1235ca2z646oc.cloudfront.net/videos/processed/255/MadeInLadakh-HD_3.mp4.webm"
          />
          <source
            className="mp4"
            type="video/mp4"
            src="https://d1235ca2z646oc.cloudfront.net/videos/processed/255/MadeInLadakh-HD_3.mp4.mp4"
          />
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

