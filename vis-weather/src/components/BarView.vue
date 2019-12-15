<template>
  <div class="bar">
    <div class="rad">
      <el-radio-group v-model="radio" @change="changeChartType">
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
      radio: 9
    }
  },
  mounted () {
    this.initCharts('radio')
  },
  methods: {
    initCharts (val) {
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
          data: this.buildyAxis(val)
        },
        series: [
          {
            type: 'bar',
            data: this.buildseries(val)
          }
        ]
      })
    },
    buildyAxis (val) {
      let ydata = []
      if (val === 3) {
        ydata.push('2013', '2014', '2015', '2016', '2017')
      } else if (val === 6) {
        ydata.push('冬季', '秋季', '夏季', '春季')
      } else {
        ydata.push('星期日', '星期六', '星期五', '星期四', '星期三', '星期二', '星期一')
      }
      return ydata
    },
    buildseries (val) {
      let data = []
      if (val === 3) {
        data.push(112.81, 120.93, 111.03, 120.85, 123.16)
      } else if (val === 6) {
        data.push(128.01, 113.86, 94.8, 112.92)
      } else {
        data.push(113.77, 121.28, 115.69, 112.16, 109.62, 109.1, 104.59)
      }
      return data
    },
    changeChartType (val) {
      this.initCharts(val)
    }
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
