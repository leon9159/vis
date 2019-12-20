<template>
  <div id="largeView" :style="{width: '100%',height: '100%'}" ref="chart"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  data () {
    return {
      pm25data: [],
      pm10data: [],
      so2data: [],
      no2data: [],
      codata: [],
      o3data: [],
      aqidata: [],
      date: []
    }
  },
  methods: {
    initCharts () {
      this.$axios
        .get('/data/large')
        .then(successResponse => {
          const datas = successResponse.data
          // console.log(datas)
          this.pm25data = Array.from(datas.pm25)
          this.pm10data = Array.from(datas.pm10)
          this.no2data = Array.from(datas.no2)
          this.so2data = Array.from(datas.so2)
          this.codata = Array.from(datas.co)
          this.o3data = Array.from(datas.o3)
          this.aqidata = Array.from(datas.aqi)
          // console.log(this.pm25data)
          this.date = Array.from(datas.date)
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
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        legend: {
          data: ['PM2.5', 'PM10', 'SO2', 'NO2', 'CO', 'O3', 'AQI']
        },
        // toolbox: {
        //   orient: 'vertical',
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: 'none'
        //     },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          top: '10%',
          left: '5%',
          right: '2%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date
        },
        yAxis: {
          type: 'log',
          boundaryGap: [0, '100%']
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
            name: 'PM2.5',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#F56C6C'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#CCFF99'
            //   }, {
            //     offset: 1,
            //     color: '#CCFF00'
            //   }])
            // },
            data: this.pm25data
          },
          {
            name: 'PM10',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#909399'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#FF6666'
            //   }, {
            //     offset: 1,
            //     color: '#FF0000'
            //   }])
            // },
            data: this.pm10data
          },
          {
            name: 'SO2',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#E6A23C'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#CCFF99'
            //   }, {
            //     offset: 1,
            //     color: '#CCFF00'
            //   }])
            // },
            data: this.so2data
          },
          {
            name: 'NO2',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#54A59A'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#CCFF99'
            //   }, {
            //     offset: 1,
            //     color: '#CCFF00'
            //   }])
            // },
            data: this.no2data
          },
          {
            name: 'CO',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#74C600'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#CCFF99'
            //   }, {
            //     offset: 1,
            //     color: '#CCFF00'
            //   }])
            // },
            data: this.codata
          },
          {
            name: 'O3',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#409EFF'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#CCFF99'
            //   }, {
            //     offset: 1,
            //     color: '#CCFF00'
            //   }])
            // },
            data: this.o3data
          },
          {
            name: 'AQI',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'red'
            },
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#CCFF99'
            //   }, {
            //     offset: 1,
            //     color: '#CCFF00'
            //   }])
            // },
            data: this.aqidata
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

</style>
