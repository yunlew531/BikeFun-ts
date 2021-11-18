<template>
  <div class="explore-wrap">
    <div class="banner"></div>
    <main class="main-wrap mx-auto relative px-28">
      <Navigation class="absolute -top-24 left-0 right-0" />
      <section class="flex items-center py-4">
        <router-link to="/">首頁</router-link>
        <span class="material-icons mx-1">chevron_right</span>
        <h4 class="text-green-100">探索路線</h4>
      </section>
      <section class="explore-search flex items-center border border-gray-500 rounded-3xl px-12 pt-6 pb-8 mb-10">
        <div class="mr-36">
          <div class="border-l-4 border-yellow-100 pl-4 py-0.5 transform -translate-x-4 mb-12">
            <h3 class="text-yellow-100 text-2xl font-bold mb-2">探索路線</h3>
            <p class="text-sm text-dark-200">找到離您最近的自行車車道</p>
          </div>
          <div class="flex items-center">
            <span class="inline-block text-dark-200 mr-12">開啟自動定位</span>
            <span
              class="block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1"
              :class="isLocate ? 'bg-green-100' : 'bg-gray-100'"
              @click="isLocate = !isLocate"
            >
              <span
                class="inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200"
                :class="isLocate ? 'right-full transform translate-x-10' : 'right-1'"
              >
              </span>
            </span>
          </div>
        </div>
        <div class="flex-grow">
          <label class="flex items-center mb-12 mr-24">
            <span class="inline-block w-36 text-dark-200">路線關鍵字</span>
            <input
              type="text"
              class="flex-grow border border-gray-100 rounded-lg p-3 focus:outline-none "
              placeholder="請輸入關鍵字"
            >
          </label>
          <label class="flex items-center mr-24">
            <span class="inline-block w-36 text-dark-200">手動輸入地址</span>
            <input
              type="text"
              class="flex-grow border border-gray-100 rounded-lg p-3 focus:outline-none "
              placeholder="請輸入關鍵字"
            >
          </label>
        </div>
        <button
          type="button"
          class="self-end text-white-100 bg-green-100 rounded-lg px-11 py-2 hover:opacity-80 duration-200">
          GO !
        </button>
      </section>
      <RoutesSearchResult />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))
const RoutesSearchResult = defineAsyncComponent(() => import('@/components/Explore/RoutesSearchResult.vue'))

const isLocate = ref(false)
</script>

<style lang="scss" scoped>
@import '~@/assets/styleSheets/mixins';

.explore-wrap {
  min-height: calc(100vh - 81px);
}
.banner {
  @include bg-style;
  height: 200px;
  background-image: url(~@/assets/images/banner02.png);
}
.main-wrap {
  max-width: 1440px;
}
.explore-search {
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
