//config
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//1.Vue.use(VueRouter),to install VueRouter
Vue.use(VueRouter)

//2.create
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: "主页"
      },
      children: [
        // {
        //   path: '/',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      meta: {
        title: "关于"
      },
      component: About
    },
    {
      path: '/user/:userId',
      meta: {
        title: "用户"
      },
      component: User
    },
    {
      path: '/profile',
      meta: {
        title: "文档"
      },
      component: Profile
    }
] //mapping映射关系
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置钩子/守卫
router.beforeEach((to , from , next) => {
  // console.log(to)
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子/守卫
// router.afterEach((to, from ) => {
//   console.log('-----')
// })

//3.import router to Vue ex
export default router