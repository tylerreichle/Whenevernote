import React from 'react'
import { shallow } from 'enzyme'

import Home from '../../src/components/home/home'

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />)
  })
})
