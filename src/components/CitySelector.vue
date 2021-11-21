<template>
  <div class="relative">
    <button
      type="button"
      class="w-full border border-gray-100 text-gray-600 text-left rounded-lg p-3 mb-2"
      @click="isCityListShow = !isCityListShow"
    >
      {{ typeof tempCity === 'string' ? tempCity : tempCity.chinese }}
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
          class="city-item cursor-pointer p-3 mr-4 hover:bg-gray-50 hover:text-green-100"
          @click="selectCity(city)"
        >
          {{ city.chinese }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import cities from '@/assets/json/city.json'

const emits = defineEmits(['change'])
const isCityListShow = ref(false)
const tempCity = ref<City | '請選擇縣市'>('請選擇縣市')

const selectCity = (city: City) => {
  tempCity.value = city
  isCityListShow.value = false
  emits('change', tempCity.value)
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
  &:last-of-type {
    @apply border-0;
  }
}
</style>
