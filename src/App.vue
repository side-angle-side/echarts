<template>
  <v-app>
    <v-main>
      <BarChart />
    </v-main>
  </v-app>
</template>

<script>
import BarChart from "./components/BarChart.vue";

export default {
  name: "App",

  components: {
    BarChart,
  },

  data: () => ({
    //
  }),
};
</script>
