import React from 'react'
import { shallow } from 'enzyme'

import Tags from '../../src/components/tags/tags'

describe('<Tags />', () => {
  it('renders without crashing', () => {
    const location = {}

    shallow(<Tags location={location} />)
  })
})
