import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Storms from '@/components/Storms';
import MainChart from '@/components/mainchart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainChart,
    },
    {
      path: '/storms',
      name: 'Storms',
      component: Storms,
    },
  ],
});
