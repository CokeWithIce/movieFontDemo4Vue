import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from "../page/index";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(["../page/index"],resolve),
      meta:{title:"home"}
    },
    {
      path:'/movieList',
      name:'movieList',
      component: resolve => require(["../page/movieList"],resolve),
      meta:{title:"movieList"}
    },
    {
      path:'/movieDetail',
      name:'movieDetail',
      component: resolve => require(["../page/movieDetail"],resolve),
      meta:{title:"movieDetail"}
    },
    {
      path:'/newDetail',
      name:'newDetail',
      component: resolve => require(["../page/newDetail"],resolve),
      meta:{title:"newDetail"}
    },
    {
      path:'/register',
      name:'register',
      component: resolve => require(["../page/registerPage"],resolve),
      meta:{title:"register"}
    },
    {
      path:'/loginPage',
      name:'loginPage',
      meta:{title:"loginpage"},
      component:resolve=>require(["../page/loginPage"],resolve)
    }
  ]
})
