import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/services/cycloneService';

Vue.use(Vuex);

const _pluck= function(drow, key) {
  const row = [];
  console.log(drow);
  drow.forEach(function (item) {
    if (item[key] !== undefined) {
      console.log('printing');
      row.push(item[key]);
    }
  });
  return row;
};

function getStormStrac(storm) {
  const x = [];
  const y = [];
  storm.data.forEach((row) => {
    x.push(row.latitude);
    y.push(row.longitude);

  });
  return { x, y };
};

const cyclone = {
  state: {
    seasonData: null,
    yearData: {},
  },
  mutations: {
    setStormData(state, values) {
      Vue.set(state, 'yearData', undefined);

      console.log('mutating state', values);
      Vue.set(state,'yearData', values);
    },
    setYearData(state, year) {
      Vue.set(state, 'seasonData', undefined);
      console.log(year);
      Vue.set(state, 'seasonData', year);
    },
  },
  getters: {
    yearInfo: state => state.yearData,
    seasonInfo: (state) => {
      const seasonTraces = [];
      if (state.seasonData) {
        state.seasonData.forEach((storm) => {
          seasonTraces.push(getStormStrac(storm));
        });
      }
      return {seasonData: state.seasonData, seasonTraces: state.seasonTraces};
    },
    seasonData: state => state.seasonData,
  },
  actions: {
    setStorms({ commit }) {
      console.log('setting storm');
      return new Promise((resolve, reject) => {
        Api.getAllStorms().then((response) => {
          console.log('gor the API return');
          resolve(response);
          commit('setStormData', response.data);
        });
      });
    },
    selectStorms({commit}, storm) {
      commit('selectStormData', storm);
    },
    setYearData({ commit }, year) {
      console.log('getting storm:', year);
      return new Promise((resolve, reject) => {
        Api.getStorm(year).then((response) => {
          console.log('gor the API return');
          resolve(response);
          commit('setYearData', response.data);
        });
      });
    },
  },
};


export default new Vuex.Store({
  strict: true,
  modules: {
    cyclone,
  },
});
