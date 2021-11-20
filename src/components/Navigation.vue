<template>
  <div>
    <nav class="nav flex h-24 bg-white-100 border-b border-gray-300 overflow-hidden">
      <h1 class="w-96 flex-shrink-0 flex items-center justify-center">
        <router-link to="/" class="flex flex-col justify-center items-center">
          <img class="bike-fun-logo" src="@/assets/images/logo_yellow.png" alt="Bike Fun">
          <span class="text-xs text-dark-100 font-light tracking-widest">Bike Fun！自行車旅遊網</span>
        </router-link>
      </h1>
      <router-link
        to="/news"
        class="nav-link flex justify-center items-center border-l border-gray-300 w-full">
        最新消息
      </router-link>
      <router-link
        to="/explore"
        class="nav-link flex justify-center items-center border-l border-gray-300 w-full">
        探索路線
      </router-link>
      <router-link
        to="/station"
        class="nav-link flex justify-center items-center border-l border-gray-300 w-full">
        尋找站點
      </router-link>
      <router-link
        to="/"
        class="nav-link flex justify-center items-center border-l border-gray-300 w-full">
        常見問題
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  borderRadius: {
    type: String,
    default: '50px 50px 0 0'
  }
})
</script>

<style lang="scss" scoped>
.nav {
  border-radius: v-bind(borderRadius);
}
.bike-fun-logo {
  width: 133px;
  height: 49px;
}
.nav-link {
  @apply text-dark-300;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    @apply text-white-100 bg-yellow-100;
  }
  &.active {
    @apply text-yellow-100;
    &:hover {
      @apply text-white-100 bg-yellow-100;
    }
  }
}
</style>
