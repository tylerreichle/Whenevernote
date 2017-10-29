import React from 'react'
import { shallow } from 'enzyme'

import Notebooks from '../../src/components/notebooks/notebooks'

describe('<Notebooks />', () => {
  it('renders without crashing', () => {
    const location = { pathname: '' }
    shallow(<Notebooks location={location} />)
  })
})
