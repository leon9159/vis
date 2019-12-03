<template>
  <div id="app">
    <div class="top">
      <div class="top1">
        <h2 :style="{color:'#303133',padding:'15px'}">北京市空气质量分析</h2>
        <TableView></TableView>
    </div>
      <div class="top2">
        <Gaode></Gaode>
      </div>
    </div>
    <div class="one">
      <LineView></LineView>
    </div>
      <!--      <BarView></BarView>-->
    <div class="two">
<!--      <MapView></MapView>-->
    </div>

    <div class="three">
    </div>

    <div class="four">
<!--      <ContrastView></ContrastView>-->
    </div>
  </div>
</template>

<script>
import BarView from './components/BarView'
import MapView from './components/MapView'
import HelloWorld from './components/HelloWorld'
import Gaode from './components/Gaode'
import LineView from './components/LineView'
import ContrastView from './components/ContrastView'
import TableView from './components/TableView'
export default {
  name: 'App',
  components: {
    BarView,
    MapView,
    HelloWorld,
    Gaode,
    LineView,
    ContrastView,
    TableView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}
  .top{
    width: 100%;
    height: 544px;
  }
  .top1{
       float: left;
       border: 2px solid darkblue;
       width: 30.5%;
       height: 100%;
     }
  .top2{
     float: left;
     width: 66%;
     height:100%;
     border: 2px solid black;
   }

  .one{
    float: left;
    border: 2px solid red;
    width: 1000px;
    height: 300px;
    /*width: 400px;*/
    /*height: 100px;*/
    /*margin-left: 20px;*/
  }
  .two{
    float: left;
    /*width: 400px;*/
    /*height: 100px;*/
    /*margin-left: 20px;*/
  }
  .three{
    float: left;
  }
  .four{
    float: left;
  }

</style>
