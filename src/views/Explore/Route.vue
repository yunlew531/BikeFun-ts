<template>
  <div>
    <main class="main-wrap overflow-hidden">
      <section class="banner-bg absolute w-full left-0 right-0 flex justify-center items-center">
        <div class="divide relative duration-1000" :class="{ 'opacity-0': !bikeRoute.RouteName }">
          <span class="block absolute text-white-100 text-5xl font-bold tracking-widest leading-normal left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {{ bikeRoute.RouteName }}
          </span>
        </div>
        <div
          class="w-7 h-12 absolute left-1/2 bottom-40 transform -translate-x-1/2 border-2 border-white-100 rounded-full duration-1000"
          :class="{ 'opacity-0': !bikeRoute.RouteName }"
        >
          <div class="mouse-wheel absolute left-1/2 top-2 w-2 h-2 bg-white-100 rounded-full"></div>
        </div>
      </section>
      <section class="route-container flex flex-col relative z-10 mx-auto">
        <div class="flex-grow"></div>
        <div ref="routeRef" class="route-panel" :class="{ 'opacity-0': !bikeRoute.RouteName }">
          <div class="flex relative">
            <Navigation class="absolute -top-24 left-0 right-0" />
            <Leaflet
              ref="leafletRef"
              class="map"
              :bikeLine="latLonArr"
              :restaurants="nearRestaurants"
              :attractions="nearAttractions"
              :kilometer="kilometer"
              @hideRestaurant="isRestaurantsShow = false"
              @hideAttraction="isAttractionsShow = false"
            />
            <div class=" flex-grow bg-white-100 px-10 py-4">
              <div class="flex items-start py-4 mb-24">
                <router-link to="/" class="flex-shrink-0">首頁</router-link>
                <span class="material-icons mx-1">chevron_right</span>
                <router-link to="/explore" class="flex-shrink-0">探索路線</router-link>
                <span class="material-icons mx-1">chevron_right</span>
                <h4 class="text-green-100">{{ bikeRoute.RouteName }}</h4>
              </div>
              <div class="flex items-start mb-6">
                <h2 class="title text-dark-200 text-2xl font-bold mr-auto">{{ bikeRoute.RouteName }}</h2>
                <button
                  type="button"
                  class="flex-shrink-0 text-green-100 border border-green-100 rounded-full duration-200 px-8 py-1
                  hover:text-white-100 hover:bg-green-100 active:opacity-80">
                  儲存此路線
                </button>
              </div>
              <p class="flex items-center mb-4">
                <span class="material-icons text-yellow-100 mr-1">room</span>
                <span class="text-dark-200">
                  {{ bikeRoute.RoadSectionStart }} -
                  {{ bikeRoute.RoadSectionEnd }}
                </span>
              </p>
              <p class="flex items-center mb-12">
                <span class="material-icons text-yellow-100 mr-1">ramp_left</span>
                <span v-if="bikeRoute.CyclingLength" class="text-dark-200">
                  雙向
                  {{ (bikeRoute.CyclingLength / 1000).toFixed(1) }}
                  公里
                </span>
              </p>
              <div class="flex">
                <div class="flex-grow">
                  <div class="flex items-center mb-6">
                    <h3 class="text-dark-200 mr-4">附近推薦美食</h3>
                    <span
                      class="block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1"
                      :class="isRestaurantsShow ? 'bg-green-100' : 'bg-gray-100'"
                      @click="handleRestaurantsShow"
                    >
                      <span
                        class="inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200"
                        :class="isRestaurantsShow ? 'right-full transform translate-x-10' : 'right-1'"
                      >
                      </span>
                    </span>
                  </div>
                  <div class="flex items-center">
                    <h3 class="text-dark-200 mr-4">附近推薦景點</h3>
                    <span
                      class="block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1"
                      :class="isAttractionsShow ? 'bg-green-100' : 'bg-gray-100'"
                      @click="handleAttractionsShow"
                    >
                      <span
                        class="inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200"
                        :class="isAttractionsShow ? 'right-full transform translate-x-10' : 'right-1'"
                      >
                      </span>
                    </span>
                  </div>
                </div>
                <img src="@/assets/images/illustration_bikegirl.png" alt="騎腳踏車女孩" class="bike-img transform rotate-6">
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref, watch, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useWheel } from '@/composition/handleWheel'
import { chineseToEng } from '@/mixins/translateCity'
import { apiSearchRoute, apiGetNearRestaurants, apiGetNearAttractions } from '@/api'
import Footer from '@/components/Footer.vue'
import Leaflet from '@/components/Leaflet.vue'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))

const route = useRoute()
const { wheelDirection } = useWheel()
const isRestaurantsShow = ref(false)
const isAttractionsShow = ref(false)
const routeRef = ref<HTMLElement>()
const routeRefTranslateY = ref<number>()
const translateY = computed(() => `translateY(${routeRefTranslateY.value}px)`)

watch(wheelDirection, (direction) => {
  if (direction === 'down') {
    routeRefTranslateY.value = 0
  } else if (direction === 'up') {
    const height: number = routeRef.value!.offsetHeight
    routeRefTranslateY.value = height
  }
})

const setRoutePanel = () => {
  const height: number = routeRef.value!.offsetHeight
  routeRefTranslateY.value = height
}

const nearRestaurants = ref<NearRestaurant[]>()
const getRestaurants = async () => {
  if (!latLonArr.value.length) return
  const middleIdx = Math.floor(latLonArr.value.length / 2)
  const [latitude, longitude] = latLonArr.value[middleIdx]

  try {
    const { data } = await apiGetNearRestaurants(latitude, longitude)
    nearRestaurants.value = data
  } catch (err) { console.dir(err) }
}

const nearAttractions = ref<NearAttraction[]>()
const getAttractions = async () => {
  if (!latLonArr.value.length) return
  const middleIdx = Math.floor(latLonArr.value.length / 2)
  const [latitude, longitude] = latLonArr.value[middleIdx]

  try {
    const { data } = await apiGetNearAttractions(latitude, longitude)
    nearAttractions.value = data
  } catch (err) { console.dir(err) }
}

const bikeRoute = ref<BikeRoute>({})
const latLonArr = ref<LatLonArr>([])
const kilometer = computed(() => {
  if (bikeRoute.value.CyclingLength) {
    return Number((bikeRoute.value.CyclingLength / 1000).toFixed(1))
  }
  return 0
})
const getBikeRoute = async (routeName: string) => {
  const city = chineseToEng(route.query._city as string)
  try {
    const { data } = await apiSearchRoute(city, routeName)
    if (data[0].Geometry) {
      latLonArr.value = formatLonLat(data[0].Geometry)
    }
    bikeRoute.value = data[0]
    nextTick(() => {
      setRoutePanel()
    })
    Promise.all([getRestaurants(), getAttractions()])
  } catch (err) { console.dir(err) }
}

const formatLonLat = (geometry: string) => {
  const arr: string[] = geometry.split('((')[1].split('))')[0].split(',')
  const latLonArr: LatLonArr = []
  arr.forEach((item) => {
    let [lon, lat]: Array<string | number> = item.split(' ')
    lat = lat ? Number(lat) : 0
    lon = lon ? Number(lon) : 0
    if (lon && lat) {
      latLonArr.push([lat, lon])
    }
  })

  return latLonArr
}

watch(() => route.params.id, (v) => {
  if (v) getBikeRoute(v as string)
}, { immediate: true })

const leafletRef = ref<InstanceType<typeof Leaflet>>()
const handleRestaurantsShow = () => {
  if (isRestaurantsShow.value) {
    isRestaurantsShow.value = false
    ;(leafletRef.value as any).removeRestaurantMarkers()
  } else {
    isRestaurantsShow.value = true
    ;(leafletRef.value as any).setRestaurantMarkers()
  }
}

const handleAttractionsShow = () => {
  if (isAttractionsShow.value) {
    isAttractionsShow.value = false
    ;(leafletRef.value as any).removeAttractionMarkers()
  } else {
    isAttractionsShow.value = true
    ;(leafletRef.value as any).setAttractionMarkers()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styleSheets/mixins';

.main-wrap {
  height: 100vh;
}
.banner-bg {
  @include bg-style;
  height: 100vh;
  background-image: url(~@/assets/images/resultCardPic01.png);
}
.divide {
  max-width: 670px;
  width: 100%;
  &::before, &::after {
    @apply absolute border border-white-100 w-40;
    content: '';
  }
  &::before {
    @apply -left-5
  }
  &::after {
    @apply -right-5
  }
}
.title {
  max-width: 280px;
  width: 100%;
}
.map {
  @apply w-full;
  max-width: 912px;
  min-height: 620px;
}
.route-container {
  @apply w-full;
  max-width: 1440px;
  min-height: 100vh;
}
.route-panel {
  transform: v-bind(translateY);
  transition: opacity 1s 0.7s, transform 0.3s;
}
.bike-img {
  width: 158px;
  height: 240px;
}
.mouse-wheel {
  transform: translateX(-50%);
  opacity: 0;
  animation: scroll-down 2.5s infinite linear;
}
@keyframes scroll-down {
  0% {
    transform: translateX(-50%);
    opacity: 1;
  }
  15% {
    transform: translateX(-50%) translateY(10px);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%);
    opacity: 0;
  }
}
</style>
