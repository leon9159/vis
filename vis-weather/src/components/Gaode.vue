<template>
    <div id="container"></div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'Gaode',
  data () {
    return {
    }
  },
  methods: {
    initChart () {
      // eslint-disable-next-line no-unused-vars,one-var
      var marker, map = new AMap.Map('container', {
        zoom: 10,
        center: [116.404269, 39.916042],
        resizeEnable: true
      })
      marker = new AMap.Marker({
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        content: '自定义坐标',
        position: [116.406315, 39.908775]
        // offset: new AMap.Pixel(-3, -3)
      })
      marker.setMap(map)
      map.setMapStyle('amap://styles/whitesmoke')
    }
  },
  mounted () {
    this.initChart()
  }
}
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
  .amap-marker-content img{
    width: 150px;
    height: 50px;
  }
</style>
