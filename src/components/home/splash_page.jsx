import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import SessionForm from './session_form_container'
import Footer from './footer'
import SplashVid from './splash_vid'

const SplashPage = () => (
  <div className="splash-container">
    <Header />

    <section className="main-content">
      <Route exact path="/signup/" component={SessionForm} />
      <Route exact path="/" component={SessionForm} />
    </section>

    <Footer />
    <SplashVid />
  </div>
)

export default SplashPage
