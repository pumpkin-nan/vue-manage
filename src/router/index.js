import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import HomePage from '../views/HomePage'
import UserPage from '../views/UserPage'
import Mall from '../views/Mall'
import PageOne from '../views/other/PageOne'
import PageTwo from '../views/other/PageTwo'


const router = new VueRouter({
  mode:'history',
  routes:[
    {
      name:'MainPage',
      path:'/',
      component:MainPage,
      children:[
        {
          name:'home',
          path:'/home',
          component:HomePage
        },
        {
          name:'user',
          path:'/user',
          component:UserPage
        },
        {
          name:'mall',
          path:'/mall',
          component:Mall
        },
        {
          name:'pageOne',
          path:'/pageOne',
          component:PageOne
        },
        {
          name:'pageTwo',
          path:'/pageTwo',
          component:PageTwo
        }
      ]
    }
  ]
})
export default router