<template>
  <div id="container" :data="heatdate"></div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'HeatView',
  data () {
    return {
      res: {},
      timevo: ''
    }
  },
  props: {
    heatdate: {
      type: String
    }
  },
  // props: ['heatdate'],
  watch: {
    heatdate: (newVal, oldVal) => {
      console.log(newVal)
      console.log(typeof (newVal))
      console.log(typeof (this.heatdate))
      this.heatdate = newVal
    }
  },
  methods: {
    initChart () {
      console.log(typeof (this.heatdate))
      console.log(this.heatdate)
      // eslint-disable-next-line no-unused-vars,one-var
      this.$axios
        .post('/data/heatmap', {date: this.heatdate})
        .then(successResponse => {
          console.log(successResponse.data)
          console.log(this.timevo)
          // eslint-disable-next-line one-var,no-unused-vars
          var heatmap, map = new AMap.Map('container', {
            // layers: [new AMap.TileLayer.RoadNet()],
            zoom: 11,
            center: [116.404269, 39.916042],
            resizeEnable: true,
            mapStyle: 'amap://styles/whitesmoke'
          })
          var marker1 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '昌平',
            position: [116.135233, 40.220661],
            zoom: 13
          })
          var marker2 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '奥体中心',
            position: [116.400865, 39.983894],
            zoom: 13
          })
          var marker3 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '东四',
            position: [116.425171, 39.929562],
            zoom: 13
          })
          var marker4 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '官园',
            position: [116.356819, 39.932774],
            zoom: 13
          })
          var marker5 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '古城',
            position: [116.185036, 39.915345],
            zoom: 13
          })
          var marker6 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '怀柔',
            position: [116.642349, 40.315704],
            zoom: 13
          })
          var marker7 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '农展馆',
            position: [116.465138, 39.940522],
            zoom: 13
          })
          var marker8 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '顺义',
            position: [116.654561, 40.130347],
            zoom: 13
          })
          var marker9 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '天坛',
            position: [116.410829, 39.881913],
            zoom: 13
          })
          var marker10 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '万柳',
            position: [116.298073, 39.967155],
            zoom: 13
          })
          var marker11 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '万寿西宫 ',
            position: [116.368245, 39.879812],
            zoom: 13
          })
          var marker12 = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            title: '定陵 ',
            position: [116.225759, 40.294843],
            zoom: 13
          })
          var marters = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11, marker12]
          map.add(marters)
          if (!this.isSupportCanvas()) {
            this.$Message.info('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
          }
          map.plugin(['AMap.Heatmap'], function () {
            // 初始化heatmap对象
            heatmap = new AMap.Heatmap(map, {
              radius: 80, // 给定半径
              opacity: [0, 0.8],
              gradient: {
                0: 'rgb(240,240,240)',
                0.25: 'rgb(98,176,248)',
                0.5: 'rgb(255,246,200)',
                0.75: '#ffad60',
                1.0: '#ff0000'
              }
            })
            heatmap.setDataSet({
              data: successResponse.data,
              max: 200
            })
            console.log(this.heatdata)
          })
        })

        .catch(failResponse => {
          // eslint-disable-next-line no-sequences
        })
      // eslint-disable-next-line no-unused-vars,one-var
    },
    isSupportCanvas () { // 判断浏览区是否支持canvas
      var elem = document.createElement('canvas')
      return !!(elem.getContext && elem.getContext('2d'))
    }
  },

  created () {
    this.initChart()
  },
  updated () {
    this.initChart()
  }
}
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
</style>
