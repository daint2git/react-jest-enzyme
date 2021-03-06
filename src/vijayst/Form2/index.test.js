import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import Form2 from './'

describe('Form2', () => {
  describe('Snapshot', () => {
    test('1. renderer', () => {
      const component = renderer.create(<Form2 />)
      const json = component.toJSON()
      expect(json).toMatchSnapshot()
    })

    test('2. shallow', () => {
      const wrapper = shallow(<Form2 />)
      expect(wrapper).toMatchSnapshot()
    })

    test('3. mount', () => {
      const wrapper = mount(<Form2 />)
      expect(wrapper).toMatchSnapshot()
    })

    test('4. render', () => {
      const wrapper = render(<Form2 />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('handles', () => {
    let wrapper, onAdd

    beforeEach(() => {
      onAdd = jest.fn()
      wrapper = mount(<Form2 onAdd={onAdd} />)
    })

    afterEach(() => {
      wrapper.unmount()
    })

    test('Form requires onAdd prop', () => {
      expect(wrapper.props().onAdd).toBeDefined()
    })

    test('Form renders button', () => {
      const button = wrapper.find('button').first()
      expect(button).toBeDefined()
    })

    test('Button click calls onAdd', () => {
      const button = wrapper.find('button').first()
      const input = wrapper.find('input').first()

      input.simulate('change', {
        target: { value: 'example@email' },
      })
      button.simulate('click')

      expect(onAdd).toHaveBeenCalledWith('example@email')
    })
  })
})
