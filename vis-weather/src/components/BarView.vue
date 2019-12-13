<template>
  <div class="bar">
    <div class="rad">
      <el-radio-group v-model="radio">
      <el-radio :label="3">年</el-radio>
      <el-radio :label="6">季节</el-radio>
      <el-radio :label="9">周</el-radio>
      </el-radio-group>
    </div>
    <div class="braMap" ref="barMap"></div>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'BarView',
  data () {
    return {
      radio: 3
    }
  },
  methods: {
    initCharts () {
      let myChart = echarts.init(this.$refs.barMap)
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          top: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          }
        ]
      })
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>

<style >
  .bar{
    height: 100%;
    width: 100%;
  }
  .rad{
    height: 10%;
    text-align: center;
  }
  .braMap{
    height: 89%;
  }
</style>
