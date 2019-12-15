<template>
  <div id="container" ></div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'HeatView',
  data () {
    return {
      heatdata: [],
      datalist: {},
      timevo: this.heatDate
    }
  },
  props: ['heatDate'],
  watch: {
    heatDate: function (newVal, oldVal) {
      this.timevo = newVal
    }
  },
  methods: {
    initChart () {
      this.$axios
        .post('/data/heatmap', {date: this.timevo})
        .then(successResponse => {
          console.log(successResponse.data)
          this.heatdata = successResponse.data
          this.datalist = JSON.parse(JSON.stringify(this.heatdata))
          console.log(this.datalist)
        })
        .catch(failResponse => {
          // eslint-disable-next-line no-sequences
        })
      console.log(this.datalist)
      // eslint-disable-next-line no-unused-vars,one-var
      var heatmap, marker, map = new AMap.Map('container', {
        // layers: [new AMap.TileLayer.RoadNet()],
        zoom: 11,
        center: [116.404269, 39.916042],
        resizeEnable: true,
        mapStyle: 'amap://styles/whitesmoke'
      })
      // marker = new AMap.Marker({
      //   icon: '',
      //   content: '奥体中心',
      //   position: [116.400865, 39.983894]
      //   // offset: new AMap.Pixel(-3, -3)
      // })
      // marker.setMap(map)
      if (!this.isSupportCanvas()) {
        this.$Message.info('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
      }
      map.plugin(['AMap.Heatmap'], function () {
        // 初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
          radius: 25, // 给定半径
          opacity: [0, 0.8],
          gradient: {
            0.5: 'blue',
            0.65: 'rgb(117,211,248)',
            0.7: 'rgb(0, 255, 0)',
            0.9: '#ffea00',
            1.0: 'red'
          }
        })
        // var mapData = []
        // this.date2.forEach(item => {
        //   let obj = {
        //     'count': item.count,
        //     'lat': item.lat,
        //     'lng': item.lng
        //   }
        //   mapData.push(obj)
        // })
        heatmap.setDataSet({
          data:
          [{
            'lng': 116.400865,
            'lat': 39.983894,
            'count': 13
          }],
          max: 100
        })
      })
    },
    isSupportCanvas () { // 判断浏览区是否支持canvas
      var elem = document.createElement('canvas')
      return !!(elem.getContext && elem.getContext('2d'))
    }
  },
  mounted () {
    this.initChart()
    // this.printout()
  }
}
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
</style>
