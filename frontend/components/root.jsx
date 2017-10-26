import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import App from './app'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
