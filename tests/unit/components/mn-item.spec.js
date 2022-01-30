import { mount, createLocalVue, } from '@vue/test-utils';
import flushPromises from 'flush-promises';

import Vuex from 'vuex';
import VueToast from 'vue-toast-notification';
import router from '@/router';

import Eye from 'vue-material-design-icons/Eye.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueToast);

localVue.component('eye-icon', Eye);
localVue.component('menu-icon', Menu);
localVue.component('phone-icon', Phone);
localVue.component('map-marker', MapMarker);
localVue.component('heart', Heart);

// Component
import MNItem from '@/components/MNItem';

describe('MNToolbar', () => {
  let component;
  let store;

  const productMock = {
    id: 15,
    sku: 11033926921508487,
    title: "Camisa Nike Corinthians",
    description: "Treino 2014",
    availableSizes: {
      S: 100,
      G: 5,
      GG: 120,
      GGG: 12
    },
    style: "Branco com detalhe em azul",
    price: 149.9,
    installments: 5,
    currencyId: "BRL",
    currencyFormat: "R$",
    isFreeShipping: true,
    image: "https://via.placeholder.com/300x300"
  }

  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        getProducts: jest.fn(() => []),
      },
    });

    component = mount(MNItem, {
      propsData: {
        product: productMock,
      },
      store,
      router,
      localVue,
    });

    component.setProps({
      product: {
        title: 'teste',
        id: 2,
      }
    })
  });

  it('check if item have title', async () => {
    await flushPromises();
    const title = await component.find('.mn-item__title');
    expect(title.text()).toContain('Camisa Nike Corinthians');
  });
});
