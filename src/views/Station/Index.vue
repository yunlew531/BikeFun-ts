<template>
  <div class="wrap flex h-full">
    <div class="flex-grow relative">
      <img src="@/assets/images/bg03.jpg" alt="腳踏車站點背景圖" class="h-full">
      <div class="banner-contanier absolute top-1/2 left-16 transform -translate-y-1/2">
        <img class="banner-logo" src="@/assets/images/logo_white.png" alt="Bike Fun">
        <span class="block text-xl text-white-100 text-right tracking-widest">Bike Fun！自行車旅遊網</span>
      </div>
    </div>
    <div class="w-96 flex-shrink-0 pl-12 pr-6 py-4">
      <div class="flex items-center py-4 mb-10">
        <router-link to="/" class="text-dark-200">首頁</router-link>
        <span class="material-icons mx-1">chevron_right</span>
        <h4 class="text-green-100">尋找站點</h4>
      </div>
      <div>
        <div class="border-l-4 border-yellow-100 pl-4 py-0.5 mb-12">
          <h3 class="text-yellow-100 text-2xl font-bold mb-2">探索路線</h3>
          <p class="text-sm text-dark-200">找到離您最近的自行車車道</p>
        </div>
        <span class="inline-block text-dark-200 mr-12 mb-2">開啟自動定位</span>
        <span
          class="block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1 mb-8"
          :class="true ? 'bg-green-100' : 'bg-gray-100'"
        >
          <span
            class="inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200"
            :class="true ? 'right-full transform translate-x-10' : 'right-1'"
          >
          </span>
        </span>
      </div>
      <div>
        <label class="block mb-6">
          <span class="block w-36 text-dark-200 mb-2">手動輸入地址</span>
          <input
            type="text"
            class="w-full border border-gray-100 rounded-lg p-3 focus:outline-none "
            placeholder="請輸入關鍵字"
          >
        </label>
        <label class="block mb-8">
          <span class="block w-36 text-dark-200 mb-2">站名關鍵字</span>
          <input
            type="text"
            class="w-full border border-gray-100 rounded-lg p-3 focus:outline-none "
            placeholder="請輸入關鍵字"
          >
        </label>
      </div>
      <div class="text-right">
        <button
          type="button"
          class="self-end text-white-100 bg-green-100 rounded-lg duration-200 px-11 py-2 hover:opacity-80 active:opacity-90"
          @click="router.push('/station/map')"
        >
          GO !
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.wrap {
  min-height: calc(100vh - 96px - 81px);
}
.banner-contanier {
  width: 550px;
}
</style>
