import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Home from '../components/home/home'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Home />
    </HashRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
