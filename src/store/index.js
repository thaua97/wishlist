import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    wishlist: [],
  },

  getters: {
    getProduct: (localState) => localState.product,
    getProducts: (localState) => localState.products,
    getWishlist: (localState) => localState.wishlist,
  },

  mutations: {
    SET_PRODUCT: (localState, payload) => {
      localState.product = payload;
    },
    SET_PRODUCTS: (localState, payload) => {
      localState.products = payload;
    },
    SET_WISHLIST: (localState, payload) => {
      localState.wishlit = payload;
    }
  },
  
  actions: {
    setProduct: ({commit}, payload) => commit('SET_PRODUCT', payload),
    setProducts: ({commit}, payload) => commit('SET_PRODUCTS', payload),
    setWishlist: ({commit}, payload) => commit('SET_WISHLIST', payload),
  },
})
