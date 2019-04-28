import Counter from './Counter'

describe('Counter', () => {
  describe('handlers', () => {
    test('should call increment method after button clicked', () => {
      const wrapper = shallow(<Counter />)
      const instance = wrapper.instance()
      const incrementMock = jest.spyOn(instance, 'handeIncrease')
      instance.forceUpdate()
      expect(incrementMock).not.toHaveBeenCalled()
      wrapper.find('button[name="increment"]').simulate('click')
      expect(incrementMock).toHaveBeenCalled()
      incrementMock.mockRestore()
    })

    test('should call increment method after button clicked (directly)', () => {
      const wrapper = shallow(<Counter />)
      const instance = wrapper.instance()
      expect(wrapper.state('count')).toBe(0)
      instance.handeIncrease()
      expect(wrapper.state('count')).toBe(1)
    })

    test('should call decrement method after button clicked', () => {
      const wrapper = shallow(<Counter />)
      const instance = wrapper.instance()
      const decrementMock = jest.spyOn(instance, 'handeDecrease')
      instance.forceUpdate()
      expect(decrementMock).not.toHaveBeenCalled()
      wrapper.find('button[name="decrement"]').simulate('click')
      expect(decrementMock).toHaveBeenCalled()
      decrementMock.mockRestore()
    })

    test('should call decrement method after button clicked (with prototype)', () => {
      const decrementMock = jest.spyOn(Counter.prototype, 'handeDecrease')
      const wrapper = shallow(<Counter />)
      expect(decrementMock).not.toHaveBeenCalled()
      wrapper.find('button[name="decrement"]').simulate('click', 'calledddddd')
      expect(decrementMock).toHaveBeenCalled()
      expect(decrementMock).toHaveBeenCalledWith('calledddddd')
      decrementMock.mockRestore()
    })
  })

  describe('should update state', () => {
    test('should update count text when increment button clicked', () => {
      const wrapper = shallow(<Counter />)
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.find('p').text()).toBe('0')
      wrapper.find('button[name="increment"]').simulate('click')
      expect(wrapper.find('p').text()).toBe('1')
      expect(wrapper).toMatchSnapshot()
    })

    test('should update count in state when increment button clicked', () => {
      const wrapper = shallow(<Counter />)
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.state().count).toBe(0)
      wrapper.find('button[name="increment"]').simulate('click')
      expect(wrapper.state().count).toBe(1)
      expect(wrapper).toMatchSnapshot()
    })

    test('should update mounted in state when componentDidMount', () => {
      const wrapper = shallow(<Counter />)
      expect(wrapper.state().mounted).toBe(true)
    })
  })
})
