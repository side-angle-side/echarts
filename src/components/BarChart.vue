<template>
  <v-container>
    <div id="main" style="height: 500px"></div>
  </v-container>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "vue";

export default {
  name: "BarChart",
  data: () => ({}),
  setup: () => {
    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    });
  },
};
</script>
