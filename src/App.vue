<template>
  <Header-App/>
  <router-view/>
</template>

<script>

import HeaderApp from '@/views/layout/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderApp
  }
}
</script>