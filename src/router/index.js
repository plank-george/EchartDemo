import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EchartDemo0702 from '@/components/EchartDemo0702'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EchartDemo0702',
      component: EchartDemo0702
    }
  ]
})
