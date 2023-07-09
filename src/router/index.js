import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router' // git page 용
import { nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 라우터값 설정
const routes = [
  //1depth
  {path: '/', name: 'Main',component: () => import( '@/views/pages/Main.vue')},
  {path: '/about',name: 'About',component: () => import( '@/views/pages/About.vue')},
  {path: '/work',name: 'Work',component: () => import( '@/views/pages/Work.vue')},
  {path: '/contact',name: 'Contact',component: () => import( '@/views/pages/Contact.vue')},

]

// VueRouter에 라우터값 넣기
const router = createRouter({
  history: createWebHistory(),
  //git page 용
  // history: createWebHashHistory ('/samdory/'),
  // mode: 'hash',
  routes,
  // 스크롤기능
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      await nextTick()
      return { top: 0, left: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  AOS.init({
    // settings...
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease-out-cubic', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })
  next()
})

//실행
export default router
