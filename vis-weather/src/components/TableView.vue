<template>
  <div>
    <div class="block" :style="{width:'439px',height:'40px'}">
      <span class="demonstration">日期</span>
      <el-date-picker
        class="input-box"
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
     </div>
    <el-table
    class="tableBox"
    :header-cell-style="rowClass"
    :cell-style="cellStyle"
    :data="tableData"
    border
    style="width: 436px">
    <el-table-column
      prop="stationName"
      label="空气质量观测站"
      width="120">
    </el-table-column>
    <el-table-column
      prop="PM25"
      label="PM2.5"
      width="65"
      color="red">
    </el-table-column>
    <el-table-column
      prop="PM10"
      label="PM10"
      width="60">
    </el-table-column>
    <el-table-column
      prop="SO2"
      label="SO2"
      width="50">
    </el-table-column>
    <el-table-column
      prop="NO2"
      label="NO2"
      width="50">
    </el-table-column>
    <el-table-column
      prop="CO"
      label="CO"
      width="45">
    </el-table-column>
    <el-table-column
      prop="O3"
      label="O3"
      width="45">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        stationName: '东城东四',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '东城天坛',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '西城官园',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '西城万寿西宫',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '朝阳奥体中心',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '朝阳农展馆',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '海淀万柳',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '石景山古城',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '顺义新城',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '昌平镇',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '怀柔镇',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      }, {
        stationName: '定陵',
        PM25: '5',
        PM10: '2',
        SO2: '1',
        NO2: '35',
        CO: '0',
        O3: '22'
      } ],
      // pickerOptions: {
      //   disabledDate (time) {
      //     return time.getTime() > Date.now()
      //   },
      value1: ''
    }
  },
  methods: {
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
      } else {
        return 'color: #000000'
      }
    },
    cellStyle ({columnIndex}) {
      if (columnIndex === 1) {
        return 'color: #F56C6C;font-size:10px;padding: 0px'
      } else if (columnIndex === 2) {
        return 'color: #909399'
      } else if (columnIndex === 3) {
        return 'color: #e6a23c'
      } else if (columnIndex === 4) {
        return 'color: #54A59A'
      } else if (columnIndex === 5) {
        return 'color: #74C600'
      } else if (columnIndex === 6) {
        return 'color: #409EFF'
      } else {
        return 'color:#000000'
      }
    }
  }
}
</script>

<style>
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
