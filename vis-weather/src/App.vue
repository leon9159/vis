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
    <div class="low">
      <div class="one">
        <ContrastView></ContrastView>
      </div>
      <div class="two">
      </div>
      <div class="three">
        <LargeView></LargeView>
      </div>
      <div class="four">
        <!--      <ContrastView></ContrastView>-->
      </div>
      <!--    <AreaView></AreaView>-->
    </div>
  </div>
</template>

<script>
import BarView from './components/BarView'
import MapView from './components/MapView'
import HelloWorld from './components/HelloWorld'
import Gaode from './components/Gaode'
import ContrastView from './components/ContrastView'
import TableView from './components/TableView'
import AreaView from './components/AreaView'
import LargeView from './components/LargeView'
export default {
  name: 'App',
  components: {
    BarView,
    MapView,
    HelloWorld,
    Gaode,
    ContrastView,
    TableView,
    AreaView,
    LargeView
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
     width: 68.5%;
     height:100%;
     border: 2px solid black;
   }
  .low{
    width: 100%;
    height: 330px;
  }
  .one{
    float: left;
    border: 2px solid red;
    width: 25%;
    height: 350px;
  }
  .two{
    float: left;
    border: 2px solid greenyellow;
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
