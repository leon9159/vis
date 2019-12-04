<template>
  <div id="braMap" :style="{width: '100%', height: '100%'}" ref="barMap">饼状图</div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'BarView',
  data () {
    return {}
  },
  methods: {
    initCharts () {
      let myChart = echarts.init(this.$refs.barMap)
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
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
