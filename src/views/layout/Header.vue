<template>
  <header class="header">
    <div class="inner">
      <h1>
        <router-link :to="routes[0].path" @click="triggerClose">
          <img src="@/assets/img/common/img_logo_samdory.png" alt="SAMDORY LOGO">
        </router-link>
      </h1>

      <div class="menu-area" data-module="menuToggle">
        <div class="btn-box">
          <button class="menu-btn"><span class="text-medium"><em>MENU</em></span></button>
        </div>
        <div class="menu-layer">

          <div class="layer-inner">
            <ul class="menu-list">
              <template v-for="(menu,i) in routes" :key="i">
                <li v-if="i !== 0">
                  <router-link :to="menu.path" class="menu-link" @click="triggerClose">{{menu.name}}</router-link>
                </li>
              </template>
            </ul>
  
            <div class="summary-wrap type-menu-inner">
              <div class="summary-circle">
                <div class="summary-circle-button-wrap">
                  <div class="summary-circle-button" @click="homeToScrollEv">
                    <p>COMPANY<br/>BROCHURE</p>
                    <button><span>화살표</span></button>
                  </div>
                </div>
                <div class="summary-circle-design"></div>
                <div class="summary-circle-design second"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  inject: ['routesRef'],
  components: {
  },
  props: {
  },
  computed: {
    routes() {
      return this.routesRef
    },
  },
  setup() {
  },
  data(){
    return{
    }
  },
  mounted(){
    // window.samdory.Vue.reset()
  },
  methods: {
    // 레이어메뉴 닫기 트리거
    triggerClose() {
      const moduleTrigger = this.$el.querySelector('[data-module="menuToggle"]').module
      if (moduleTrigger) {
        moduleTrigger.close()
      }
      // this.$nextTick(() => {
      //   setTimeout(() => {
      //     AOS.refresh()
      //     console.log('[pub]triggerClose', AOS.refresh())
      //   }, 2000)
      // })
    },
    // COMPANY BROCHURE 클릭 강제 홈이동 및 스크롤하단
    homeToScrollEv() {
      this.$router.push('/')
      this.triggerClose()

      window.setTimeout(() => {
        const height = document.body.scrollHeight;
        window.scrollTo({ top: height, behavior: 'smooth' });
      })
    }
  }
}
</script>

<style scoped>
</style>
