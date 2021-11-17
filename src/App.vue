<template>
  <router-view/>
  <Footer />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>
