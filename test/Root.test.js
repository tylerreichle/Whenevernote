import React from 'react'
import { shallow } from 'enzyme'

import Root from '../frontend/components/root'
import configureStore from '../frontend/store/store'

describe('<Root />', () => {
  it('renders without crashing', () => {
    const store = configureStore()
    shallow(<Root store={store} />)
  })
})
