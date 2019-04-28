import React from 'react'
import { mount } from 'enzyme'
import Layout from './layout'

describe('Layout', () => {
  describe('selectors', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(
        <Layout>
          <div>abc</div>
        </Layout>,
      )
    })

    test('has a main tag', () => {
      const mainTags = wrapper.find('main')
      expect(mainTags).toHaveLength(1)
      expect(mainTags.text()).toBe('abc')
    })
  })
})
