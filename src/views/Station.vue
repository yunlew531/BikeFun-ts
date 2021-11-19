<template>
  <div class="station-wrap flex flex-col">
    <div class="border-b border-gray-100">
      <Navigation borderRadius="0 0 0 0" class="nav mx-auto -mb-px" />
    </div>
    <main class="main mx-auto">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<style lang="scss" scoped>
.station-wrap {
  min-height: 100vh;
}
.nav, .main {
  max-width: 1440px;
  width: 1440px;
}
</style>
