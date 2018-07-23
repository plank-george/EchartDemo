<template>
    <div>
        <div id="radarChart" ref="radarChart" style="width:600px;height:400px"></div>
        <div id="doughnutChart" ref="doughnutChart" style="width:600px;height:400px"></div>
        <button @click="initDoughnutChart">test</button>
    </div>
    
</template>
<script>
var echarts = require('echarts')
export default {
    data:function(){
        return {
            radarChart:{},
            optionRadar : {
                title: {
                    text: '浏览器占比变化',
                    subtext: '纯属虚构',
                    top: 10,
                    left: 10
                },
                tooltip: {
                    trigger: 'item',
                    backgroundColor : 'rgba(0,0,250,0.2)'
                },
                legend: {
                    type: 'scroll',
                    bottom: 10,
                    data: (function (){
                        var list = [];
                        for (var i = 1; i <=28; i++) {
                            list.push(i + 2000 + '');
                        }
                        return list;
                    })()
                },
                visualMap: {
                    top: 'middle',
                    right: 10,
                    color: ['red', 'yellow'],
                    calculable: true
                },
                radar: {
                indicator : [
                    { text: 'IE8-', max: 400},
                    { text: 'IE9+', max: 400},
                    { text: 'Safari', max: 400},
                    { text: 'Firefox', max: 400}
                    ]
                },
                series : (function (){
                    var series = [];
                    for (var i = 1; i <= 1; i++) {
                        series.push({
                            name:'浏览器（数据纯属虚构）',
                            type: 'radar',
                            symbol: 'none',
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            lineStyle: {
                                width: 1
                            },
                            emphasis: {
                                areaStyle: {
                                    color: 'rgba(0,250,0,0.3)'
                                }
                            },
                            data:[
                            {
                                value:[
                                    (40 - i) * 10,
                                    (38 - i) * 4 + 60,
                                    i * 5 + 10,
                                    i * 9,
                                    i * i /2
                                ],
                                name: i + 2000 + ''
                            }
                            ]
                        });
                    }
                    return series;
                })()
            },
            optionDoughnut : {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            }
        }
    },
    methods:{
        initDoughnutChart(){
            this.radarChart.setOption(this.optionDoughnut)
        },
        initRadarChart(){
            this.radarChart = echarts.init(this.$refs.radarChart)
            this.radarChart.on('click',(params) => {
                this.radarChart.clear()
                this.radarChart.setOption(this.optionDoughnut)
            })
            this.radarChart.setOption(this.optionRadar)
        }
    },
    created(){

    },
    mounted(){
        this.initRadarChart()
    }
}
</script>
