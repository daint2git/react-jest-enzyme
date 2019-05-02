import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import TextBox from './'

describe('TextBox', () => {
  test('matches the snapshot', () => {
    const wrapper = shallow(<TextBox />)
    expect(wrapper).toMatchSnapshot()
  })

  test('onChange handle', () => {
    const props = {
      value: '',
      onChange: jest.fn(e => e.target.value),
    }
    let wrapper = mount(<TextBox {...props} />)
    expect(wrapper.find('input').prop('value')).toBe('')
    wrapper.find('input').simulate('change', { target: { value: 'example1@email' } })
    expect(props.onChange).toHaveBeenCalled()
    expect(props.onChange).toHaveBeenCalledTimes(1)
    wrapper.find('input').simulate('change', { target: { value: 'example2@email' } })
    expect(props.onChange).toHaveBeenCalledTimes(2)
    wrapper.find('input').simulate('change', { target: { value: 'example3@email' } })
    expect(props.onChange.mock.results[2].value).toBe('example3@email')
  })
})
