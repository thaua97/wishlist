import { mount, createLocalVue, } from '@vue/test-utils';
import flushPromises from 'flush-promises';

import Vuex from 'vuex';
import VueToast from 'vue-toast-notification';
import router from '@/router';

import Menu from 'vue-material-design-icons/Menu.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueToast);

localVue.component('menu-icon', Menu);
localVue.component('phone-icon', Phone);
localVue.component('map-marker', MapMarker);
localVue.component('heart', Heart);

// Component
import MNToolbar from '@/components/MNToolbar';

describe('MNToolbar', () => {
  let component;
  let store;
  const city = {city: 'Pelotas - RS'}

  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        getLocation: jest.fn(() => city),
      },
    });

    component = mount(MNToolbar, {
      store,
      router,
      localVue,
    });
  });

  it('check if toolbar have user location', async () => {
    await flushPromises();
    const location = await component.find('#location');
    expect(location.text()).toContain('Cidade: Pelotas - RS');
  });

  it('check if i can navegate to wishlist', async () => {
    await flushPromises();
    const router = await component.findAll('.mn-toolbar__nav--item').at(2);
    router.trigger('click');
    await flushPromises();
    expect(component.vm.$route.name).toContain('Wishlist');
  });
});
