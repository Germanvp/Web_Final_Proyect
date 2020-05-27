import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UserMain from '@/components/UserMain'
import Local from '@/components/Local'
import Global from '@/components/Global'
import Teams from '@/components/Teams'
import Notifications from '@/components/Notifications'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/usermain',
      name: 'User Main',
      component: UserMain,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'local',
          component: Local
        },
        {
          path: 'global',
          component: Global
        },  
        {
          path: 'teams',
          component: Teams
        },
        {
          path: 'notifications',
          component: Notifications
        },      
        // ...other sub routes
      ]
    }
  ]
})
