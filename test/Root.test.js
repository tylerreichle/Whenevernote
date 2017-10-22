import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../frontend/components/root'
import configureStore from '../frontend/store/store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const store = configureStore()

  ReactDOM.render(<Root store={store} />, div)
})
