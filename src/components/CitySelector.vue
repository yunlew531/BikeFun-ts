<template>
  <div class="relative">
    <button
      type="button"
      class="w-full border border-gray-100 text-left rounded-lg p-3 mb-2"
      :class="tempCity === '請選擇縣市' ? 'text-gray-600' : 'text-dark-200'"
      @click="isCityListShow = !isCityListShow"
    >
      {{ tempCity === '請選擇縣市' ? tempCity : tempCity.chinese }}
    </button>
    <div class="absolute left-0 right-0 z-10">
      <ul
        v-show="isCityListShow"
        data-simplebar
        data-simplebar-auto-hide="false"
        class="city-list border border-gray-100 bg-white-100 shadow-lg rounded-lg"
      >
        <li
          v-for="city in cities.data"
          :key="city.chinese"
          class="city-item text-dark-200 cursor-pointer p-3 mr-4 hover:bg-gray-50 hover:text-green-100"
          @click="selectCity(city)"
        >
          {{ city.chinese }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import citiesType from '@/assets/json/city.json'
import 'simplebar-vue/dist/simplebar-vue.js'
import 'simplebar-vue/dist/simplebar.min.css'

defineProps({
  cities: {
    type: Object as PropType<typeof citiesType>,
    default: () => ({}),
    required: true
  }
})

const isCityListShow = ref(false)
const tempCity = ref<City | '請選擇縣市'>('請選擇縣市')

const selectCity = (city: City) => {
  tempCity.value = city
  isCityListShow.value = false
}

defineExpose({
  tempCity
})
</script>

<style lang="scss" scoped>
.city-list {
  height: 300px;
}
.city-item {
  @apply border-b border-gray-100;
  &:first-of-type {
    @apply rounded-t-lg;
  }
  &:last-of-type {
    @apply border-0 rounded-b-lg;
  }
}
</style>
