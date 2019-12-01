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
      // eslint-disable-next-line no-unused-vars
      var map = new AMap.Map('container', {
        zoom: 11,
        center: [116.404269, 39.916042]
      })
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
    width: 600px;
    height: 480px;
  }
</style>
