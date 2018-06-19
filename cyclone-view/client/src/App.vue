<template>
  <div id="app">
    <NavBar></NavBar>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col ><SideMenu></SideMenu></b-col>
        <b-col v-if="seasonInfo !== undefined" cols="8"><storms></storms></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cycloneStore from '@/apps/cyclone-store';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NavBar from '@/components/NavBar';
import SideMenu from '@/components/SideMenu';
import MainChart from '@/components/mainchart';
import { mapGetters } from 'vuex';
import Storms from "./components/Storms";

Vue.use(BootstrapVue);

export default {
  name: 'App',
  store: cycloneStore,
  components: {
    Storms,
    NavBar,
    SideMenu,
    MainChart,
  },
  computed: {
    ...mapGetters({
      seasonInfo: 'seasonInfo',
    }),
  },
  created() {
    console.log('on create dispatching set storms');
    this.$store.dispatch('setStorms');
    this.$store.dispatch('setYearData');

  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
