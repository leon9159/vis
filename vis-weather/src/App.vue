<template>
  <div id="app">
    <div class="top">
      <HelloWorld ></HelloWorld >
    </div>

    <div class="left">
      <BarView></BarView>
    </div>

    <div class="right">
      <MapView></MapView>
    </div>

  </div>
</template>

<script>
import BarView from './components/BarView'
import MapView from './components/MapView'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    BarView,
    MapView,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 2000px;
  height: 700px;
}
  .top{
     /*width: 800px;*/
     /*height:300px;*/
   }
  .left{
    float: left;
    /*width: 400px;*/
    /*height: 100px;*/
    /*margin-left: 20px;*/
  }
  .right{
    float: left;
    /*width: 400px;*/
    /*height: 100px;*/
    /*margin-left: 20px;*/
  }

</style>
