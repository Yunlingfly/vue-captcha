<template>
  <div>
    <div class="v-echarts">
      <v-chart :options="polar" />
    </div>
    <div>
      <v-chart ref="chart" :options="myOptions" :autoresize="true"></v-chart>
    </div>
    <div class="Echarts">
      <div id="main" style="width:600px;height:400px;"></div>
    </div>
    <div>
      <dv-loading>Loading...</dv-loading>
      <dv-active-ring-chart
        :config="dataVOptions"
        style="background-color:#282C34;width:300px;height:300px"
      />
    </div>
  </div>
</template>

<script>
import VECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  name: "Echarts",
  components: {
    "v-chart": VECharts,
  },
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      myOptions: {
        tooltip: {},
        legend: {
          data: ["销量"],
        },
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
      },
      polar: {
        title: {
          text: "极坐标双数值轴",
        },
        legend: {
          data: ["line"],
        },
        polar: {
          center: ["50%", "54%"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        angleAxis: {
          type: "value",
          startAngle: 0,
        },
        radiusAxis: {
          min: 0,
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data,
          },
        ],
        animationDuration: 2000,
      },
      dataVOptions: {
        lineWidth: 10,
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
    };
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
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
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style scoped>
.v-echarts {
  width: 100%;
  height: 100%;
}
</style>