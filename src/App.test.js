import React from 'react'
import {shallow} from 'enzyme'
import { findByTestAttr} from '../test/testUtils'
import App from './App'

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
*/
const setup = () => {
  const wrapper =  shallow(<App />)
  return wrapper
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
})
