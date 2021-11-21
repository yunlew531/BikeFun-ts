<template>
  <div class="explore-wrap flex flex-col">
    <div class="banner"></div>
    <main class="main-wrap flex-grow mx-auto relative px-28">
      <Navigation class="absolute -top-24 left-0 right-0" />
      <section class="flex items-center py-4">
        <router-link to="/" class="text-dark-200">首頁</router-link>
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
          <div class="flex items-center mb-12 mr-24">
            <span class="inline-block w-36 text-dark-200">選擇縣市</span>
            <CitySelector
              ref="citySelectorRef"
              class="flex-grow"
            />
          </div>
          <label class="flex items-center mr-24">
            <span class="inline-block w-36 text-dark-200">關鍵字</span>
            <input
              v-model="searchText"
              type="text"
              class="flex-grow border border-gray-100 rounded-lg p-3 focus:outline-none"
              placeholder="請輸入關鍵字"
            >
          </label>
        </div>
        <button
          type="button"
          class="search-btn self-end"
          :disabled="tempCity === '請選擇縣市'"
          @click="searchRoute"
        >
          GO !
        </button>
      </section>
      <RoutesSearchResult :bikeRoutes="bikeRoutes" @sort="handleSort" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiSearchRoute } from '@/api'
import { chineseToEng } from '@/mixins/translateCity'
import useLocation from '@/composition/useLocation'
import { getDistance } from 'geolib'
import 'simplebar-vue/dist/simplebar-vue.js'
import 'simplebar-vue/dist/simplebar.min.css'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))
const RoutesSearchResult = defineAsyncComponent(() => import('@/components/Explore/RoutesSearchResult.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
const CitySelector = defineAsyncComponent(() => import('@/components/CitySelector.vue'))

const route = useRoute()
const router = useRouter()
const isLocate = ref(false)
const { myLocation, getLocation } = useLocation()
getLocation()

const citySelectorRef = ref<InstanceType<typeof CitySelector>>()
const tempCity = computed(() => (citySelectorRef.value as any)?.tempCity)

const searchText = ref('')

const bikeRoutes = ref<BikeRoute[]>([])
const searchRoute = async () => {
  if (tempCity.value === '請選擇縣市') return
  router.push({
    name: 'Explore',
    query: {
      _city: tempCity.value.chinese,
      _content: searchText.value
    }
  })
}

watch(() => route.query, async (query) => {
  const { _city, _content } = query
  if (!_city && !_content) {
    bikeRoutes.value = []
    return
  }
  const engCity = chineseToEng(_city as string)
  try {
    const { data } = await apiSearchRoute(engCity, searchText.value)
    data.forEach((bikeRoute, idx) => {
      data[idx].distance = calcDistance(bikeRoute.Geometry)
    })
    data.sort((a, b) => Number(a.distance) - Number(b.distance))
    bikeRoutes.value = data
  } catch (err) { console.dir(err) }
}, { immediate: true })

const calcDistance = (geometry?: string) => {
  if (!geometry) return

  const [longitude, latitude] = geometry.split('((')[1].split(',')[0].split(' ')

  let meters = 0
  if (myLocation.value?.latitude) {
    meters = getDistance(
      { latitude: myLocation.value.latitude, longitude: myLocation.value.longitude },
      { latitude, longitude }
    )
  }
  const km = (meters / 1000).toFixed(1)

  return km
}

const handleSort = (sortType: string) => {
  if (!bikeRoutes.value?.length) return

  if (sortType === 'nearToFar') {
    bikeRoutes.value.sort((a, b) => Number(a.distance) - Number(b.distance))
  } else if (sortType === 'farToNear') {
    bikeRoutes.value.sort((a, b) => Number(b.distance) - Number(a.distance))
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styleSheets/mixins';

.explore-wrap {
  min-height: calc(100vh);
}
.banner {
  @include bg-style;
  height: 200px;
  background-image: url(~@/assets/images/banner02.png);
}
.main-wrap {
  max-width: 1440px;
  width: 100%;
}
.explore-search {
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
