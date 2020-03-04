import { mount } from '@vue/test-utils'
import ListItem from '../../src/components/ListItem.vue'

describe('ListItem.vue', () => {
    it('renders the items name in .title element', () => {
       const wrapper = mount(ListItem, {
           propsData: {
               item: {
                   name: "title"
               }
           }
       });
       expect(wrapper.find(".title").element.textContent.trim()).toBe("title");
    })
})