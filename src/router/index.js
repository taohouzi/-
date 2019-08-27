import Vue from 'vue'
import Router from 'vue-router'


//解决router-link点击相同路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path:'/home',
      name: 'Home',
      redirect:'show',
      component:()=>import('../views/Home'),
      children:[
        {
          path:'/show',
          name:'Show',
          component:()=>import('../views/Show'),
        },
        {
          path:'/adddata',
          name:'Adddata',
          component:()=>import('../views/Adddata')
        },
        {
          path:'/revise/:id',
          name:'Revise',
          component:()=>import('../views/Revise')
        }
      ]
    }
  ]
})
