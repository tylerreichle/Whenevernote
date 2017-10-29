import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../../src/components/home/footer'

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />)
  })

  it('renders footer element', () => {
    const wrapper = shallow(<Footer />)
    const footer = (
      <footer>
        <h3>Join <span className="green">tens</span> of people who rely on Whenevernote to get more things done every day.</h3>
      </footer>
    )
    expect(wrapper.contains(footer)).toEqual(true)
  })
})
