<template>
  <div id="areaView" :style="{width: '800px',height: '400px'}" ref="chart"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  methods: {
    initCharts () {
      let myCharts = echarts.init(this.$refs.chart)
      // var base = +new Date(2016, 9, 3)
      // var oneDay = 24 * 3600 * 1000
      // var date = []
      // var data = [Math.random() * 300]
      // for (var i = 1; i < 20000; i++) {
      //   var now = new Date(base += oneDay)
      //   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
      //   data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
      var base = +new Date(2016, 9, 3)
      var oneDay = 24 * 3600 * 1000
      var valueBase = Math.random() * 300
      var valueBase2 = Math.random() * 50
      var valueBase3 = Math.random() * 10
      var data = []
      var data2 = []
      var data3 = []

      for (var i = 1; i < 10; i++) {
        var now = new Date(base += oneDay)
        var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-')

        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase)
        valueBase <= 0 && (valueBase = Math.random() * 300)
        data.push([dayStr, valueBase])

        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2)
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50)
        data2.push([dayStr, valueBase2])

        valueBase3 = Math.round((Math.random() - 0.5) * 20 + valueBase3)
        valueBase3 <= 0 && (valueBase3 = Math.random() * 10)
        data3.push([dayStr, valueBase3])
      }
      myCharts.setOption({
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
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
        title: {
          left: 'center',
          text: '触屏 tooltip 和 dataZoom 示例'
        },
        xAxis: {
          type: 'time',
          // boundaryGap: [0, 0],
          axisPointer: {
            value: '2016-10-7',
            snap: true,
            lineStyle: {
              color: '#004E52',
              opacity: 0.5,
              width: 2
            },
            label: {
              show: true,
              formatter: function (params) {
                return echarts.format.formatTime('yyyy-MM-dd', params.value)
              },
              backgroundColor: '#004E52'
            },
            handle: {
              show: false,
              color: '#004E52'
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            inside: true
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            inside: true,
            formatter: '{value}\n'
          },
          z: 10
        },
        grid: {
          top: 110,
          left: 15,
          right: 15,
          height: 160
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: '#8ec6ad'
              }
            },
            stack: 'a',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8ec6ad'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              }
            },
            data: data
          },
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            stack: 'b',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: '#d68262'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#d68262'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              }
            },
            data: data2
          },
          {
            name: '测试数据',
            type: 'line',
            smooth: true,
            stack: 'c',
            symbol: 'ret',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'red'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#d68262'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              }
            },
            data: data3
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
