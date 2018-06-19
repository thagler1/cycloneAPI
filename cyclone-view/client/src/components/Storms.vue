<template>
  <div>
  <div v-if="seasonData">
    <b-card v-if="seasonData.seasonTraces"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
      <p class="card-text">
      <div id="myDiv"></div>
      {{ seasonData.seasonTraces }}
      </p>
    </b-card>
    {{seasonTraces}}
    <div id="chart"></div>
  </div>
  </div>
</template>

<script>
  /* eslint-disable comma-dangle */

  import { mapGetters } from 'vuex';
import Vue from 'vue';
import Plotly from 'plotly.js';
import Mainchart from './mainchart';

const plotData = [{
    type: 'scattergeo',
    lat: [ 40.7127, 51.5072 ],
    lon: [ -74.0059, 0.1275 ],
    mode: 'lines',
    line:{
      width: 2,
    }
  }];

const layout= {
    title: 'London to NYC Great Circle',
    showlegend: false,
    geo: {
      resolution: 50,
      showland: true,
      showlakes: true,
      landcolor: 'rgb(204, 204, 204)',
      countrycolor: 'rgb(204, 204, 204)',
      lakecolor: 'rgb(255, 255, 255)',
      projection: {
        type: 'equirectangular'
      },
      coastlinewidth: 2,
      lataxis: {
        range: [ 20, 60 ],
        showgrid: true,
        tickmode: 'linear',
        dtick: 10
      },
      lonaxis:{
        range: [-100, 20],
        showgrid: true,
        tickmode: 'linear',
        dtick: 20
      }
    }
  };

export default {
  components: {Mainchart},
  name: 'storms',
  props: {
    plotLayour: layout,
    plotData,
  },
  computed: {
    ...mapGetters({
      seasonData: 'seasonData',
      seasonTraces() {
       const plotData = this.$store.getters('seasonInfo').seasonTraces;
       console.log('ggggeeeetttterr');
       Plotly.plot('#myDiv', plotData);
      },
    }),
  },
  methods:{
    renderChart() {
      if(this.seasonData) Plotly.newPlot('myDiv', plotData, layout);
    },
  },
  mounted() {
    this.renderChart();
  },
};

</script>
