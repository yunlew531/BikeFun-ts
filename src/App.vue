<template>
  <router-view/>
</template>

<script lang="ts" setup>
import setAuth from '@/mixins/setAuth'

setAuth()
</script>
