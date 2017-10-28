import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../src/components/home/header'

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />)
  })

  it('renders gitHub link', () => {
    const wrapper = shallow(<Header />);
    const gitHub = (<a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/tylerreichle/Whenevernote"
                    >Github</a>)
    expect(wrapper.contains(gitHub)).toEqual(true);
  })

  it('renders linkedin link', () => {
    const wrapper = shallow(<Header />);
    const linkedin = (<a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/tyler-reichle-36b379130/"
                      >LinkedIn</a>)
    expect(wrapper.contains(linkedin)).toEqual(true);
  })
})
