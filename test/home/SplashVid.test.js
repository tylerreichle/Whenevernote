import React from 'react'
import { shallow } from 'enzyme'

import SplashVid from '../../src/components/home/splash_vid'

describe('<SplashVid />', () => {
  it('renders without crashing', () => {
    shallow(<SplashVid />)
  })
})
