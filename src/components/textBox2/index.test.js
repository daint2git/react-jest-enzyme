import { mount } from 'enzyme'
import TextBox from './'

describe('TextBox', () => {
  describe('handles', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<TextBox />)
    })

    afterEach(() => {
      wrapper.unmount()
    })

    test('state', () => {
      const instance = wrapper.instance()
      expect(wrapper.state('email')).toBe('default email')
      instance.handleMailChange({ target: { value: 'example@email' } })
      expect(wrapper.state('email')).toBe('example@email')
    })

    test('props', () => {
      const instance = wrapper.instance()
      expect(wrapper.find('input').prop('value')).toBe('default email')
      instance.handleMailChange({ target: { value: 'example@email' } })
      wrapper.update()
      expect(wrapper.find('input').prop('value')).toBe('example@email')
    })

    test('simulate', () => {
      expect(wrapper.find('input').prop('value')).toBe('default email')
      // se chay vao handleMailChange
      wrapper.find('input').simulate('change', { target: { value: 'example@email' } })
      expect(wrapper.find('input').prop('value')).toBe('example@email')
    })
  })
})
