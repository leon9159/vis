<template>
  <div id="calendarView" :style="{width: '100%',height: '100%'}" ref="chart"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'CalendarView',
  data: function () {
    return {
      return: {

      }
    }
  },
  methods: {
    initCharts () {
      let myCharts = echarts.init(this.$refs.chart)
      myCharts.setOption({
        tooltip: {
          position: 'top',
          formatter: function (p) {
            var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0])
            return format + ': ' + p.data[1]
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 10000,
          orient: 'vertical',
          top: 'center'
        },
        calendar: {
          range: ['2013-03-01', '2017-02-28'],
          width: 'auto',
          cellSize: 'auto',
          height: 'auto',
          left: 20,
          top: 20
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: getVirtulData(2017)
        }
      })
    }
  },
  mounted () {
    this.initCharts()
  }
}
function getVirtulData (year) {
  year = year || '2017'
  const date = +echarts.number.parseDate(year + '-01-01')
  var end = +echarts.number.parseDate(year + '-12-31')
  var dayTime = 3600 * 24 * 1000
  const data = []
  for (var time = date; time <= end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 10000)
    ])
  }
  return data
}
</script>

<style scoped>

</style>
