<template>
  <div>
    <section class="explore-result border border-gray-500 rounded-3xl px-12 pt-6 pb-8 mb-16">
      <div class="flex">
        <div class="border-l-4 border-yellow-100 pl-4 py-0.5 transform -translate-x-4 mb-8 mr-auto">
          <h3 class="text-yellow-100 text-2xl font-bold mb-2">搜尋結果</h3>
          <p class="text-sm text-dark-200">找到離您最近的自行車車道</p>
        </div>
        <div>
          <button
            v-show="sortType === 'nearToFar'"
            type="button" class="sort-btn flex items-center px-4 py-3 rounded-3xl"
            @click="sortType = 'farToNear'"
          >
            <span class="material-icons mr-1 text-yellow-100">import_export</span>
            <span>排序：由近到遠</span>
          </button>
          <button
            v-show="sortType === 'farToNear'"
            type="button" class="sort-btn flex items-center px-4 py-3 rounded-3xl"
            @click="sortType = 'nearToFar'"
          >
            <span class="material-icons mr-1 text-yellow-100">import_export</span>
            <span>排序：由遠到近</span>
          </button>
        </div>
      </div>
      <!-- <p>很抱歉，沒有找到相關的路線。</p> -->
      <ul class="grid grid-cols-3 gap-7">
        <li class="group rounded-3xl overflow-hidden border border-gray">
          <div class="overflow-hidden">
            <img src="@/assets/images/index_news01.jpg" alt="漁人碼頭" class="h-48 w-full duration-300 transform group-hover:scale-105">
          </div>
          <div class="flex items-stretch p-4">
            <div class="mr-auto">
              <h2 class="text-dark-200 mb-3">下坪自行車道</h2>
              <span class="text-green-100 text-sm">雙向 15.1公里</span>
            </div>
            <div class="flex flex-col justify-between items-end text-right">
              <span class="block text-gray-200 text-sm mb-3">距離您的位置約 0.5公里</span>
              <span class="flex items-center text-green-100 text-sm">
                <span class="material-icons mr-1 text-xl text-yellow-100">room</span>
                <span>南投縣仁愛鄉</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <div class="flex justify-end mb-16">
      <Navigation />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const Navigation = defineAsyncComponent(() => import('@/components/Pagination.vue'))

const sortType = ref<sortType>('nearToFar')
</script>

<style lang="scss" scoped>
.explore-result, .sort-btn {
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.2);
}
.sort-btn {
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.15);
  }
  &:active {
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>
