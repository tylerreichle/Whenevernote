import React from 'react'
import { shallow } from 'enzyme'

import Root from '../src/components/root'
import configureStore from '../src/store/store'

describe('<Root />', () => {
  it('renders without crashing', () => {
    const store = configureStore()
    shallow(<Root store={store} />)
  })
})
