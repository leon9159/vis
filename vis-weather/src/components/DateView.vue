<template>
  <div id="time">
    <div class="top">
      <div class="top1">
        <h2 :style="{color:'#303133',padding:'15px',align:'center' }">北京市空气质量分析</h2>
        <div class="dateView">
          <div class="block" :style="{width:'100%',height:'100%'}">
            <span class="demonstration">日期</span>
            <el-date-picker
              class="input-box"
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              @change="time(),showdot()"
              format="yyyy-MM-dd "
              value-format="yyyy-MM-dd"
              default-value="2013-03-01"
            >
            </el-date-picker>
          </div>
          <tableView :date="tableData"></tableView>
        </div>
      </div>
      <div class="top2">
        <HeatView :date2="tableData2"></HeatView>
      </div>
    </div>
    <div class="low">
      <div class="one">
        <!--        <ContrastView></ContrastView>-->
      </div>
      <div class="two">
        <BarView></BarView>
      </div>
      <div class="three">
        <LargeView></LargeView>
      </div>
      <div class="four">
      </div>
    </div>
  </div>

</template>

<script>
import tableView from './TableView'
import HeatView from './HeatView'
import LargeView from './LargeView'
import BarView from './BarView'
export default {
  name: 'DateView',
  data () {
    return {
      tableData: [
        {stationName: '奥体中心', pm25: '5.000', pm10: '2.000', so2: '1.000', no2: '35.000', co: '3.000', o3: '22.000', aqi: '30.000'},
        {stationName: '昌平', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '东四', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '官园', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '古城', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '怀柔', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '顺义', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '天坛', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '农展馆', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '万柳', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '万寿西宫', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'},
        {stationName: '定陵', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'}
      ],
      tableData2: [],
      value1: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  components: {
    HeatView,
    tableView,
    LargeView,
    BarView
  },
  methods: {
    time () {
      this.$axios
        .post('/data/table', {date: this.value1})
        .then(successResponse => {
          // console.log(successResponse.data)
          this.tableData = successResponse.data
        })
        .catch(failResponse => {
          // eslint-disable-next-line no-sequences
        })
    },
    showdot () {
      this.$axios
        .post('/data/heatmap', {date: this.value1})
        .then(successResponse => {
          console.log(successResponse.data)
          this.tableData2 = successResponse.data
        })
        .catch(failResponse => {
        })
      console.log(this.value1)
    }
  }
}
</script>

<style scoped>
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
  .dateView{
    height:50px;
  }
  .block{
    position: center;
  }
</style>
