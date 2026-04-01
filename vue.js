import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {
    
  },
  actions: {
   
  },
  getters: {
 
  }
});

import Vue from 'vue';
import App from './App.vue';
import store from './store'; // Importando a store Vuex

new Vue({
  render: h => h(App),
  store, // Integrando a store ao Vue
}).$mount('#app');

state: {
  cart: [],
},

mutations: {
  ADD_TO_CART(state, product) {
    state.cart.push(product);
  },
},

actions: {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
},
Getters:
getters: {
  cartItemCount: state => {
    return state.cart.length;
  },
},
