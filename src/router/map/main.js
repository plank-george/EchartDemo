export default [{
  path: '',
  component (resolve) {
    require(['@/components/home'], resolve)
  }
},
{
  path: 'home',
  meta: {
    active: '1'
  },
  component (resolve) {
    require(['@/components/home'], resolve)
  }
}
]
