<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

alert('頁面沒有找到 !')
router.go(-1)
</script>
