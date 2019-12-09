<template>
  <div id="app">
    <div class="top">
      <div class="top1">
        <h2 :style="{color:'#303133',padding:'15px'}">北京市空气质量分析</h2>
<!--        <TableView></TableView>-->
    </div>
      <div class="top2">
<!--        <Gaode></Gaode>-->
      </div>
    </div>
    <div class="low">
      <div class="one">
<!--        <ContrastView></ContrastView>-->
      </div>
      <div class="two">
<!--        <BarView></BarView>-->
      </div>
      <div class="three">
        <LargeView></LargeView>
      </div>
      <div class="four">
      </div>
<!--          <AreaView></AreaView>-->
    </div>
  </div>
</template>

<script>
import BarView from './components/BarView'
import MapView from './components/MapView'
import Gaode from './components/Gaode'
import ContrastView from './components/ContrastView'
import TableView from './components/TableView'
import LargeView from './components/LargeView'
export default {
  name: 'App',
  components: {
    BarView,
    MapView,
    Gaode,
    ContrastView,
    TableView,
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
    height: 400px;
  }
  .one{
    float: left;
    border: 2px solid red;
    width: 25%;
    height: 100%;
  }
  .two{
    float: left;
    border: 2px solid greenyellow;
    width: 25%;
    height:100%
    /*width: 400px;*/
    /*height: 100px;*/
    /*margin-left: 20px;*/
  }
  .three{
    float: left;
    border: 2px solid cornflowerblue;
    width: 49%;
    height: 100%
  }
  .four{
    float: left;
  }

</style>
