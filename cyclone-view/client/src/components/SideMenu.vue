<template>
  <div>
  <b-list-group>
    <b-button v-for="item in yearInfo" @click="getYearData(item._id)">{{ item._id }} {{ item.count}}</b-button>
  </b-list-group>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'side-menu',
  data() {
    return {
      selyear: undefined,
    };
  },
  computed: {
    ...mapGetters([
      'yearInfo',
    ]),
  },
  methods: {
    getYearData(year) {
      this.selYear = year;
      this.$store.dispatch('setYearData', year);

    },
  },
};
</script>

<style scoped>

</style>
