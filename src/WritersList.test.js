import React from 'react'
import {shallow, mount} from 'enzyme'
import { findByTestAttr, checkProps} from '../test/testUtils'
import WritersList from './WritersList'


const defaultProps = {
  writers: [
    { id:1,first_name:'Gael', last_name:'Inuk', email:'gi@email.com', pseudonym:'Gaiman' },
    { id:2,first_name:'Sol', last_name:'Black', email:'sb@email.com', pseudonym:'Arya' },
    { id:3,first_name:'Indra', last_name:'Laiuki', email:'im@email.com', pseudonym:'Indi' }
  ],
}

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/
const setup = (state=null) => {
  const wrapper = shallow(<WritersList />)
  if (state) wrapper.setState(state)
  return wrapper
}

describe('component loads without errors', () => {
  test('does not throw warning with expected props', () => {
    checkProps(WritersList, defaultProps)
  })
  test('renders the writers table', () => {
    const wrapper = setup();
    const writersTable = findByTestAttr(wrapper, 'writers-table');
    expect(writersTable.length).toBe(1);
  })
})

describe('if there are writers', () => {
  let wrapper
  const writers = [
    { id:1,first_name:'Gael', last_name:'Inuk', email:'gi@email.com', pseudonym:'Gaiman' },
    { id:2,first_name:'Sol', last_name:'Black', email:'sb@email.com', pseudonym:'Arya' }
  ]
  beforeEach(() => {
    wrapper = setup()
    wrapper.setState({writers});
  })

  test('correct number of writers', () => {
    const writerNodes = findByTestAttr(wrapper, 'writer-row')
    expect(writerNodes.length).toBe(writers.length)
  })
  test('correct writers content', () => {
    const writerNodes = findByTestAttr(wrapper, 'writer-row')
    const writerColumns = findByTestAttr(wrapper, 'writers-table').find('thead').find('th')
    writerNodes.forEach((writerNode, rowIndex) => {
          const cells = writerNode.find('td')
          expect(cells).toHaveLength(writerColumns.length)
          expect(cells.at(0).text()).toContain(writers[rowIndex].id)
          expect(cells.at(1).text()).toEqual(writers[rowIndex].pseudonym)
          expect(cells.at(2).text()).toEqual(writers[rowIndex].first_name)
          expect(cells.at(3).text()).toEqual(writers[rowIndex].last_name)
          expect(cells.at(4).text()).toEqual(writers[rowIndex].email)
       })
  })
  test('if received nextPageURL show next button', () => {
    const nextPageURL = "http://next.page.url"
    wrapper.setState({nextPageURL})
    const nextButton = findByTestAttr(wrapper, 'button-next')
    expect(nextButton.length).toBe(1)
  })
  test('if empty nextPageURL no next button', () => {
    const nextPageURL = ""
    wrapper.setState({nextPageURL})
    const nextButton = findByTestAttr(wrapper, 'button-next')
    expect(nextButton.length).toBe(0)
  })
})

describe('if there are no writers', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })
  test('the writers table has 0 rows', () => {
    const writerNodes = findByTestAttr(wrapper, 'writer-row')
    expect(writerNodes.length).toBe(0)
  })
  test('the "no writers message" element contains some text', () => {
    const nowritersMessage = findByTestAttr(wrapper, 'no-writers-message')
    expect(nowritersMessage.text().length).not.toBe(1)
  })
  test('no next button', () => {
    const nextButton = findByTestAttr(wrapper, 'button-next')
    expect(nextButton.length).toBe(0)
  })
})
