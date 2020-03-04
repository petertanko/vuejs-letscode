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

    it('has active class when active property is true', () => {
        const wrapper = mount(ListItem, {
            propsData: {
                item: {
                    name: "title"
                },
                active: true
            }
        });
        expect(wrapper.element.classList.contains("active")).toBeTruthy();
     })

     it('lacks active class when active property is false', () => {
        const wrapper = mount(ListItem, {
            propsData: {
                item: {
                    name: "title"
                },
                active: false
            }
        });
        expect(wrapper.element.classList.contains("active")).toBeFalsy();
     })

     it('emits a select event when item click is clicked', () => {
        const wrapper = mount(ListItem, {
            propsData: {
                item: {
                    name: "title"
                }
            }
        });
        wrapper.find('.title').trigger('click');
        expect(wrapper.emitted('select')).toBeTruthy();
     })

     it('emits a delete event when trash icon is clicked', () => {
        const wrapper = mount(ListItem, {
            propsData: {
                item: {
                    name: "title"
                }
            }
        });
        wrapper.find('.context i').trigger('click');
        expect(wrapper.emitted('delete')).toBeTruthy();
     })

     it('does not emit anything when created', () => {
        const wrapper = mount(ListItem, {
            propsData: {
                item: {
                    name: "title"
                }
            }
        });
        expect(wrapper.emitted('select')).toBeFalsy();
        expect(wrapper.emitted('delete')).toBeFalsy();
     })
})