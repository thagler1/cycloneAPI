import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/services/cycloneService';

Vue.use(Vuex);

const cyclone = {
  state: {
    stormData: {},
  },
  mutations: {
    setStormData(state, values) {
      console.log('mutating state');
      state.stormData = values;
      console.log(state.stormData);
    },
  },
  getters: {
    stormData: state => state.stormData,
  },
  actions: {
    setStorms({ commit }) {
      console.log('setting storm');
      return Api.getAllStorms().then((response) => {
        console.log('gor the API return');
        commit('setStormData', response.data);
      });
    },
  },
}


export default new Vuex.Store({
  strict: true,
  modules: {
    cyclone,
  },
});
