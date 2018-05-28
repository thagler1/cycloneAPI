<template>
  <div class="storms">
    This file will list all the posts.
    <ul v-for="well in stormData">
      <li>
        <b>{{ well.year }}</b> Name: {{ well.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'storms',
  computed: {
    ...mapGetters([
      'stormData',
    ]),
    getData() {
      // return this.$store.getters.getallStorms;
      return 'todd';
    },
  },
  created() {
    console.log('on create dispatching set storms');
    this.$store.dispatch('setStorms');
  },
};

</script>
