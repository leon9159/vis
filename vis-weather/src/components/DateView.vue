<template>
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
    <tablev :tabledata="tableData"></tablev>
  </div>
</template>

<script>
import tablev from './TableView'
export default {
  name: 'DateView',
  data () {
    return {
      tableData: [{stationName: '奥体中心', pm25: '5.000', pm10: '2.000', so2: '1.000', no2: '35.000', co: '3.000', o3: '22.000', aqi: '30.000'},
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
        {stationName: '定陵', pm25: '5', pm10: '2', so2: '1', no2: '35', co: '0', o3: '22', aqi: '30'}],
      value1: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        onPick () {
          console.log('value1')
          // 这里可以写执行之后的逻辑 用户选择一次时间范围会触发两次
        }
      }
    }
  },
  components: {
    tablev
  },
  methods: {
    time () {
      this.$axios
        .post('/data/table', {date: this.value1})
        .then(successResponse => {
          console.log(successResponse.data)
          this.tableData = successResponse.data
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>

</style>
