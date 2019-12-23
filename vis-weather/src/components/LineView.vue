<template>
  <div class="lineView" ref="chart"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'LineView',
  data: function () {
    return {
      date: [],
      aqi: [],
      aqiReal: []
    }
  },
  methods: {
    initCharts () {
      this.$axios
        .get('/data/forecast')
        .then(successResponse => {
          let datas = successResponse.data
          console.log(datas)
          this.date = Array.from(datas.date)
          this.aqi = Array.from(datas.aqi)
          this.aqiReal = Array.from(datas.aqiReal)
          // console.log(this.pm25data)
          this.drowChart()
        })
        .catch(failResponse => {
          console.log(failResponse.message)
        })
    },
    drowChart () {
      let myCharts = echarts.init(this.$refs.chart)
      myCharts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['真实Aqi', '预测Aqi']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 10
        }, {
          start: 0,
          end: 10,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }],
        series: [
          {
            name: '真实Aqi',
            type: 'line',
            data: this.aqiReal
          },
          {
            name: '预测Aqi',
            type: 'line',
            data: this.aqi
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

<style scoped>
 .lineView{
   height: 100%;
   width: 100%;
 }
</style>
