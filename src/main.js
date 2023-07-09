import { createApp } from 'vue'
import App from '@/App.vue'
// 내장
import router from '@/router/index.js'
import VueScrollTo from 'vue-scrollto'
// css,js
import '@/assets/css/app.css'
import CommonJs from '@/assets/js/common.js'
// Animate On Scroll 전역 적용 
import AOS from 'aos'
import 'aos/dist/aos.css'


const Vue = createApp(App)
Vue.provide('routesRef', router.options.routes)
Vue.use(router)
Vue.use(VueScrollTo)
Vue.use(CommonJs)
Vue.use(AOS)
Vue.provide('AOS', AOS)
Vue.mount("#app")

export default {
  components: {
  },
}