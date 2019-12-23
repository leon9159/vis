<template>
  <div id="time">
    <div class="top">
      <div class="top1">
        <h2 :style="{color:'#303133',padding:'15px',paddingTop:'0px',paddingBottom:'0px'}">北京市空气质量分析</h2>
        <div class="dateView">
          <div class="block" :style="{width:'100%',height:'100%'}">
            <span class="demonstration">日期</span>
            <el-date-picker
              class="input-box"
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              @change="time()"
              format="yyyy-MM-dd "
              value-format="yyyy-MM-dd"
              default-value="2013-03-01"
              align="center"
            >
            </el-date-picker>
          </div>
          <tableView :date="tableData"></tableView>
        </div>
      </div>
      <div class="top2">
        <HeatView :heatdate="changeValue"></HeatView>
      </div>
    </div>
    <div class="low">
      <div class="one">
        <LargeView></LargeView>
      </div>
      <div class="two">
        <BarView></BarView>
      </div>
      <div class="three">
        <LineView></LineView>
      </div>

    </div>
  </div>

</template>

<script>
import tableView from './TableView'
import HeatView from './HeatView'
import LargeView from './LargeView'
import BarView from './BarView'
import CalendarView from './CalendarView'
import LineView from './LineView'
export default {
  name: 'DateView',
  data () {
    return {
      tableData: [
        {'stationName': '奥体中心', 'aqi': 31.94, 'o3': 63.88, 'so2': 11.71, 'co': 429.17, 'pm25': 7.12, 'pm10': 10.75, 'no2': 22.58},
        {'stationName': '昌平', 'aqi': 38.9, 'o3': 77.79, 'so2': 16.04, 'co': 387.5, 'pm25': 5.08, 'pm10': 18.96, 'no2': 15.33},
        {'stationName': '东四', 'aqi': 36.49, 'o3': 72.99, 'so2': 8.35, 'co': 391.67, 'pm25': 6.42, 'pm10': 9.88, 'no2': 28.34},
        {'stationName': '官园', 'aqi': 35.62, 'o3': 63.17, 'so2': 8.5, 'co': 400.0, 'pm25': 7.54, 'pm10': 11.67, 'no2': 28.5},
        {'stationName': '古城', 'aqi': 78.04, 'o3': 77.29, 'so2': 7.26, 'co': 864.58, 'pm25': 8.62, 'pm10': 16.88, 'no2': 62.43},
        {'stationName': '怀柔', 'aqi': 39.31, 'o3': 78.62, 'so2': 15.45, 'co': 332.64, 'pm25': 7.54, 'pm10': 12.38, 'no2': 11.23},
        {'stationName': '顺义', 'aqi': 30.78, 'o3': 61.56, 'so2': 3.0, 'co': 347.92, 'pm25': 8.08, 'pm10': 9.33, 'no2': 12.86},
        {'stationName': '天坛', 'aqi': 34.04, 'o3': 68.08, 'so2': 8.88, 'co': 450.0, 'pm25': 8.62, 'pm10': 14.46, 'no2': 21.58},
        {'stationName': '农展馆', 'aqi': 36.04, 'o3': 72.08, 'so2': 9.25, 'co': 341.67, 'pm25': 6.46, 'pm10': 10.83, 'no2': 27.71},
        {'stationName': '万柳', 'aqi': 39.94, 'o3': 46.62, 'so2': 11.47, 'co': 393.75, 'pm25': 8.0, 'pm10': 14.29, 'no2': 31.95},
        {'stationName': '万寿西宫', 'aqi': 28.62, 'o3': 57.25, 'so2': 7.32, 'co': 322.22, 'pm25': 8.04, 'pm10': 10.75, 'no2': 18.1},
        {'stationName': '定陵', 'aqi': 40.98, 'o3': 81.96, 'so2': 3.0, 'co': 204.17, 'pm25': 6.38, 'pm10': 6.4, 'no2': 2.34}
      ],
      value1: '',
      changeValue: '',
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
    BarView,
    CalendarView,
    LineView
  },
  methods: {
    time () {
      this.changeValue = this.value1
      // console.log(this.changeValue)
      this.$axios
        .post('/data/table', {date: this.value1})
        .then(successResponse => {
          this.tableData = successResponse.data
        })
        .catch(failResponse => {
          // eslint-disable-next-line no-sequences
        })
    }
  }
}
</script>

<style scoped>
  .top{
    padding-top: 0px;
    margin-top: 0px;
    width: 100%;
    height: 515px;
  }

  .top1{
    float: left;
    border: 2px solid #909399;
    width: 30.5%;
    height: 100%;
    text-align: center;
  }
  .top2{
    float: left;
    width: 68.5%;
    height:100%;
    border: 2px solid #909399;
  }
  .low{
    width: 100%;
    height: 400px;
  }
  .three{
    float: left;
    border: 2px solid #909399 ;
    width: 25%;
    height: 100%;
  }
  .two{
    float: left;
    border: 2px solid #909399;
    width: 25%;
    height:100%
    /*width: 400px;*/
    /*height: 100px;*/
    /*margin-left: 20px;*/
  }
  .one{
    float: left;
    border: 2px solid #909399;
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
    text-align: center;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
</style>
