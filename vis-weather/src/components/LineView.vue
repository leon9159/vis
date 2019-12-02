<template>
  <div id="lineView" :style="{width: '1000px', height: '300px'}" ref="chart"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'LineView',
  methods: {
    initCharts () {
      let myCharts = echarts.init(this.$refs.chart)
      myCharts.setOption({
        title: {
          text: 'Beijing AQI'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: [1, 2, 3]
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        toolbox: {
          left: 'center',
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{
          startValue: '2014-06-01'
        }, {
          type: 'inside'
        }],
        visualMap: {
          top: 10,
          right: 10,
          pieces: [{
            gt: 0,
            lte: 50,
            color: '#096'
          }, {
            gt: 50,
            lte: 100,
            color: '#ffde33'
          }, {
            gt: 100,
            lte: 150,
            color: '#ff9933'
          }, {
            gt: 150,
            lte: 200,
            color: '#cc0033'
          }, {
            gt: 200,
            lte: 300,
            color: '#660099'
          }, {
            gt: 300,
            color: '#7e0023'
          }],
          outOfRange: {
            color: '#999'
          }
        },
        series: {
          name: 'Beijing AQI',
          type: 'line',
          data: [1, 5, 3],
          markLine: {
            silent: true,
            data: [{
              yAxis: 50
            }, {
              yAxis: 100
            }, {
              yAxis: 150
            }, {
              yAxis: 200
            }, {
              yAxis: 300
            }]
          }
        }
      })
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>

<style scoped>

</style>
