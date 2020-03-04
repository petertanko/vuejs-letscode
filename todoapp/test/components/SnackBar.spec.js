import { mount } from '@vue/test-utils'
import SnackBar from '../../src/components/SnackBar.vue'

describe('SnackBar.vue', () => {
    it('should be hidden when notification property is not present', () => {
       const wrapper = mount(SnackBar, {});
      expect(wrapper.element.classList.contains("show")).toBeFalsy()
    })

    it('should be hidden when notification property is present', () => {
        const wrapper = mount(SnackBar, {
            propsData: {
                notification: "title"
            }
        });
       expect(wrapper.element.classList.contains("show")).toBeTruthy()
     })

     it('should render notification text', () => {
        const wrapper = mount(SnackBar, {
            propsData: {
                notification: "title"
            }
        });
       expect(wrapper.element.textContent.trim()).toBe("title")
     })

})