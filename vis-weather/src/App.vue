<template>
  <div id="app">
    <div class="top">
<!--      <HelloWorld ></HelloWorld >-->
      <Gaode></Gaode>
    </div>

    <div class="left">
      <BarView></BarView>
    </div>

    <div class="right">
      <MapView></MapView>
    </div>
<!--      <Beijing></Beijing>-->

  </div>
</template>

<script>
import BarView from './components/BarView'
import MapView from './components/MapView'
import HelloWorld from './components/HelloWorld'
// import Beijing from './components/Beijing'
import Gaode from './components/Gaode'
export default {
  name: 'App',
  components: {
    BarView,
    MapView,
    HelloWorld,
    Gaode
    // Beijing
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
  width: 1500px;
}
  .top{
     /*width: 800px;*/
     /*height:300px;*/
    border: 2px solid black;
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
