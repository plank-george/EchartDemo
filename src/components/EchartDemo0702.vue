<template>
    <div>
        <div id="echartCont" ref="echartcont" style="width:600px;height:400px;" >
        </div>
        <div id="echartMap" ref="echartMap" style="width:600px;height:400px;" >
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
var echarts = require('echarts')
export default {
  data(){
    return {
    title:"echart test",
    option:{
        title: {
        text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    }
    }
  },
  created(){
  },
  mounted(){
      this.initChart()
  },
  computed:{

  },
  methods:{
    initChart(){
      debugger
      // document.getElementById('echartCont')
      var chartIns = echarts.init(this.$refs.echartcont,'dark')
      chartIns.setOption(this.option)
    }
  }
}
</script>
