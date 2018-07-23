import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EchartDemo0702 from '@/components/EchartDemo0702'
import Radar from '@/components/Radar'
import ChinaMap from '@/components/ChinaMap'
import mainMap from './map/main'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   name:'main',
    //   meta:{
    //     requireAuth:false //表示该路由是需要验证的
    //   },
    //   component(resolve){
    //     require(['@/components/main'],resolve)
    //   },
    //   children:[...mainMap]
    // },
    {
      path: '/',
      name: 'EchartDemo0702',
      component: EchartDemo0702
    },
    {
      path:'/Radar',
      name:'Radar',
      component:Radar
    },
    {
      path: '/ChinaMap',
      name: 'ChinaMap',
      component: ChinaMap
    }
  ]
})
