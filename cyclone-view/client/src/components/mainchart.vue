<template>
    <div id="main-chart"></div>
</template>

<script>
  import Plotly from 'plotly.js';
  import { mapGetters } from 'vuex';

    export default {
        name: 'mainchart',
      computed: {
          chartData: function() {
            const data = this.$store.getters.stormData;
            console.log(data);
            let traces = {
              x: [],
              y: [],
              type: 'scatter'
            };
            try {
              data.storm.forEach(function (row) {
                console.log(row);
                traces.x.push(row._id);
                traces.y.push(row.count);
              });
            }
            catch(err){
              console.log(err);
            };
            return traces;
          },
      },
      methods: {
        createChart(state) {
          console.log(this.chartData);
          Plotly.plot('main-chart', [this.chartData]);
        },
      },
      mounted: function() {
          this.createChart(this);
      },

    };
</script>

<style scoped>

</style>
