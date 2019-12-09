<template>
  <div>
    <div class="block" :style="{width:'100%',height:'100%'}">
      <span class="demonstration">日期</span>
      <el-date-picker
        class="input-box"
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
        @change="time"
        format="yyyy-MM-dd "
        value-format="yyyy-MM-dd"
        default-value="2013-03-01"
      >
      </el-date-picker>
     </div>
    <el-table
    class="tableBox"
    :header-cell-style="rowClass"
    :cell-style="cellStyle"
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column prop="stationName" label="观测站" width="83" ></el-table-column>
    <el-table-column prop="pm25" label="PM2.5" width="70" color="red"></el-table-column>
    <el-table-column prop="pm10" label="PM10" width="70"></el-table-column>
    <el-table-column prop="so2" label="SO2" width="70"></el-table-column>
    <el-table-column prop="no2" label="NO2" width="70"></el-table-column>
    <el-table-column prop="co" label="CO" width="70"></el-table-column>
    <el-table-column prop="o3" label="O3" width="70"></el-table-column>
    <el-table-column prop="AQI" label="AQI" width="70"></el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {stationName: '奥体中心', pm25: '5.000', pm10: '2.000', so2: '1.000', no2: '35.000', co: '3.000', o3: '22.000', AQI: '30.000'},
        {stationName: '昌平', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '东四', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '官园', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '古城', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '怀柔', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '顺义', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '天坛', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '农展馆', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '万柳', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '万寿西宫', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'},
        {stationName: '定陵', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', AQI: '30'}],
      value1: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        onPick () {
          console.log('jj')
          // 这里可以写执行之后的逻辑 用户选择一次时间范围会触发两次
        }
      }

    }
  },
  methods: {
    time () {
      console.log('jj')
      console.log(this.value1)
      // var _this = this
      this.$axios
        .post('/data/table', {date: this.value1})
        .then(successResponse => {
          // if (successResponse.data.code === 200) {
          //   this.$router.replace({path: '/index'})
          // }/
          console.log(successResponse.data)
          // var obj = JSON.parse(successResponse.data)
          this.tableData = successResponse.data
          // console.log(this.tableData)
        })
        .catch(failResponse => {
        })
    },
    rowClass ({row, rowIndex, column, columnIndex}) {
      if (rowIndex === 0 && columnIndex === 1) {
        return 'background:#F56C6C;color:#000000'
      } else if (rowIndex === 0 && columnIndex === 2) {
        return 'background:#909399;color:#000000'
      } else if (rowIndex === 0 && columnIndex === 3) {
        return 'background:#E6A23C;color:#000000'
      } else if (rowIndex === 0 && columnIndex === 4) {
        return 'background:#54A59A;color:#000000'
      } else if (rowIndex === 0 && columnIndex === 5) {
        return 'background:#74C600;color:#000000'
      } else if (rowIndex === 0 && columnIndex === 6) {
        return 'background:#409EFF;color:#000000'
      } else if (rowIndex === 0 && columnIndex === 7) {
        return 'background:#BC1313;color:#000000'
      } else {
        return 'color: #000000'
      }
    },
    cellStyle ({columnIndex}) {
      if (columnIndex === 1) {
        return 'color: #F56C6C;font-size:5px;padding: 0px'
      } else if (columnIndex === 2) {
        return 'color: #909399;font-size:5px'
      } else if (columnIndex === 3) {
        return 'color: #e6a23c;font-size: 5px'
      } else if (columnIndex === 4) {
        return 'color: #54A59A;font-size: 5px'
      } else if (columnIndex === 5) {
        return 'color: #74C600; font-size: 5px'
      } else if (columnIndex === 6) {
        return 'color: #409EFF; font-size:5px'
      } else if (columnIndex === 7) {
        return 'color: #BC1313; font-size:5px'
      } else {
        return 'color:#000000'
      }
    }
  }
}
</script>

<style>
  .block{
    padding-top: 5px;
  }
  .demonstration{
    font-size: 15px;
  }
  .tableBox th {
      padding: 0!important;
      height: 35px;
      line-height: 30px;
    }
    td{
      padding: 0!important;
      height: 30px;
      line-height: 30px;
    }
</style>
