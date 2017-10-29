import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import SessionForm from '../../src/components/home/session_form_container'
import configureStore from '../../src/store/store'

describe('<SessionForm />', () => {
  it('renders without crashing', () => {
    const store = configureStore()

    shallow(
      <Provider store={store}>
        <SessionForm />
      </Provider>
    )
  })
})
