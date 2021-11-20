<template>
  <router-view/>
</template>

<script lang="ts" setup>
import setAuth from '@/composition/setAuth'

setAuth()
</script>
