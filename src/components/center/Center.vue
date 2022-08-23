<template>
  <div class="Center" ref="myCenter">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Center",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    rawLine() {
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      let chart = this.$echarts.init(this.$refs.myCenter);
      chart.setOption(option);
    },
  },
  mounted() {
    // this.rawLine();
  },
};
</script>

<style scoped>
.Center {
  width: 49vw;
  height: 91vh;
  color: red;
  background-color: pink;
}
</style>
