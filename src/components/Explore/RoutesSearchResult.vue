<template>
  <div>
    <section ref="exploreRef" class="explore-result border border-gray-500 rounded-3xl px-12 pt-6 pb-8 mb-16">
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
        <li
          v-for="(bikeRoute, key) in currentDisplay"
          :key="`${bikeRoute.RouteName}${key}`"
          class="flex flex-col group rounded-3xl overflow-hidden border border-gray cursor-pointer"
          @click="router.push(`/explore/132?_city=${bikeRoute.City}`)"
        >
          <div class="overflow-hidden">
            <img :src="bikeRoute.photo" alt="漁人碼頭" class="h-48 w-full duration-300 transform group-hover:scale-105">
          </div>
          <div class="flex-grow flex items-stretch p-4">
            <div class="flex flex-col mr-auto">
              <h2 class="text-dark-200 mb-3">{{ bikeRoute.RouteName }}</h2>
              <span class="block text-green-100 text-sm mt-auto">
                雙向 {{ (bikeRoute.CyclingLength / 1000).toFixed(1) }} 公里
              </span>
            </div>
            <div class="flex flex-col justify-between items-end text-right ml-1">
              <span class="distance block text-gray-200 text-sm mb-3">距離您 {{ bikeRoute.distance }} 公里</span>
              <span class="location flex items-center text-green-100 text-sm">
                <span class="material-icons mr-1 text-xl text-yellow-100">room</span>
                <span>{{ bikeRoute.City }}{{bikeRoute.Town}}</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <div class="flex justify-end mb-16">
      <Pagination
        v-show="pages.total"
        :pages="pages"
        @change="goPage"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, PropType, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { apiGetPhotos } from '@/api/index'
import { getRandomArr } from '@/composition/handleRandom'

const Pagination = defineAsyncComponent(() => import('@/components/Pagination.vue'))

const props = defineProps({
  bikeRoutes: {
    type: Array as PropType<BikeRoute[]>,
    default: () => ([])
  }
})

const router = useRouter()

const photos = ref()
const getPhotos = async () => {
  try {
    const { data } = await apiGetPhotos()
    photos.value = data
  } catch (err) { console.dir(err) }
}
getPhotos()
const pages = ref<Pages>({})
watch(() => props.bikeRoutes, (value: BikeRoute[]) => {
  let total = Math.floor(value.length / 12) + 1
  total = value.length % 12 === 0 ? total - 1 : total
  pages.value = {
    total,
    current: 1
  }
})

const sortType = ref<sortType>('nearToFar')

const emits = defineEmits(['sort'])

watch(sortType, (value) => {
  if (value === 'nearToFar') {
    emits('sort', 'nearToFar')
  } else if (value === 'farToNear') {
    emits('sort', 'farToNear')
  }
})

const currentDisplay = computed(() => {
  if (!pages.value.current) return
  const minIdx = (pages.value.current - 1) * 12
  const maxIdx = pages.value.current * 12 - 1
  const randomArr = getRandomArr(12, photos.value.length)
  const arr = props.bikeRoutes.filter((bikeRoute, idx) => idx >= minIdx && idx <= maxIdx)
  arr.forEach((bikeRoute, idx) => {
    arr[idx].photo = photos.value[randomArr[idx]]
  })
  return arr
})

const exploreRef = ref<HTMLElement>()
const goPage = (page: number) => {
  pages.value.current = page
  exploreRef.value!.scrollIntoView({ behavior: 'smooth' })
}
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
.distance {
  min-width: 110px;
}
.location {
  max-width: 150px;
}
</style>
