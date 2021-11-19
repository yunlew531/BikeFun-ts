<template>
  <div class="wrap flex overflow-hidden">
    <div class="flex flex-col w-96 border-r border-l border-gray-100">
      <h3 class="h-16 flex justify-center items-center text-white-100 text-lg font-bold bg-yellow-100">站點列表</h3>
      <ul data-simplebar class="station-list">
        <li
          v-for="(station, key) in 15"
          :key="station"
          class="border-b border-gray-100 -mb-px"
        >
          <div
            class="h-16 flex justify-center items-center px-5"
            :class="{ 'bg-yellow-200 shadow': key === 0 }"
          >
            <h2 class="text-dark-200 font-bold mr-auto">捷運松山站 (3號出口)</h2>
            <span class="text-sm text-green-100">正常營運</span>
          </div>
          <div v-show="key === 0" class="px-5 py-5">
            <div class="flex">
              <div class="mr-auto mb-6">
                <p class="text-purple-100">可租借車數：33</p>
                <p>可歸還車數：<span class="text-purple-100">5</span></p>
              </div>
              <span class="text-sm text-dark-200">YouBike 1.0</span>
            </div>
            <p class="flex items-center text-green-100 mb-4">
              <span class="material-icons mr-1 text-yellow-100">room</span>
              <span class="text-dark-200">敦化北路 / 富錦街口(東北側)</span>
            </p>
            <button type="button" class="flex items-center">
              <span class="material-icons mr-1">search</span>
              <span class="text-dark-200 leading-5 border-b border-dark-200">尋找附近的自行車道</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-grow flex flex-col border-r border-gray-100">
      <div class="flex items-center px-8 py-4">
        <router-link to="/" class="text-dark-200">首頁</router-link>
        <span class="material-icons mx-1">chevron_right</span>
        <router-link to="/station" class="text-dark-200">尋找站點</router-link>
        <span class="material-icons mx-1">chevron_right</span>
        <h4 class="text-green-100">探索路線</h4>
      </div>
      <div class="flex-grow border-t border-gray-100"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'simplebar-vue/dist/simplebar.min.css'
import 'simplebar-vue/dist/simplebar-vue.js'
</script>

<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 96px - 81px);
}
.station-list {
  height: calc(100vh - 96px - 81px - 80px);
}
</style>
