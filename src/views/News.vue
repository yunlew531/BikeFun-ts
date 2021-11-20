<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

alert('消息準備中，敬請期待 !')
router.go(-1)
</script>
