<template>
  <div>
    <main class="main-wrap overflow-hidden">
      <section class="banner-bg absolute w-full left-0 right-0 flex justify-center items-center">
        <div class="divide relative">
          <span class="block absolute text-white-100 text-5xl font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            下坪自行車道
          </span>
        </div>
        <div class="w-7 h-12 absolute left-1/2 bottom-40 transform -translate-x-1/2 border-2 border-white-100 rounded-full">
          <div class="mouse-wheel absolute left-1/2 top-2 w-2 h-2 bg-white-100 rounded-full"></div>
        </div>
        <!-- <img src="@/assets/images/slideDown.png" alt="滑鼠滾動" class="absolute left-1/2 bottom-40 transform -translate-x-1/2"> -->
      </section>
      <section class="route-container flex flex-col relative z-10 mx-auto">
        <div class="flex-grow"></div>
        <div ref="routeRef" class="route-panel">
          <div class="flex relative">
            <Navigation class="absolute -top-24 left-0 right-0"/>
            <div class="map"></div>
            <div class=" flex-grow bg-white-100 px-10 py-4">
              <div class="flex items-center py-4 mb-32">
                <router-link to="/">首頁</router-link>
                <span class="material-icons mx-1">chevron_right</span>
                <router-link to="/explore">探索路線</router-link>
                <span class="material-icons mx-1">chevron_right</span>
                <h4 class="text-green-100">下坪自行車道</h4>
              </div>
              <div class="flex mb-6">
                <h2 class="mr-auto text-dark-200 text-2xl font-bold">下坪自行車道</h2>
                <button
                  type="button"
                  class=" text-green-100 border border-green-100 rounded-full duration-200 px-8 py-1
                  hover:text-white-100 hover:bg-green-100 active:opacity-80">
                  儲存此路線
                </button>
              </div>
              <p class="flex items-center mb-4">
                <span class="material-icons text-yellow-100 mr-1">room</span>
                <span class="text-dark-200">557 南投縣竹山鎮投45鄉道7號</span>
              </p>
              <p class="flex items-center mb-12">
                <span class="material-icons text-yellow-100 mr-1">ramp_left</span>
                <span class="text-dark-200">雙向 15.1公里</span>
              </p>
              <div class="flex">
                <div class="flex-grow">
                  <div class="flex items-center mb-6">
                    <h3 class="text-dark-200 mr-4">附近推薦美食</h3>
                    <span
                      class="block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1"
                      :class="showRestaurants ? 'bg-green-100' : 'bg-gray-100'"
                      @click="showRestaurants = !showRestaurants"
                    >
                      <span
                        class="inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200"
                        :class="showRestaurants ? 'right-full transform translate-x-10' : 'right-1'"
                      >
                      </span>
                    </span>
                  </div>
                  <div class="flex items-center">
                    <h3 class="text-dark-200 mr-4">附近推薦景點</h3>
                    <span
                      class="block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1"
                      :class="showAttractions ? 'bg-green-100' : 'bg-gray-100'"
                      @click="showAttractions = !showAttractions"
                    >
                      <span
                        class="inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200"
                        :class="showAttractions ? 'right-full transform translate-x-10' : 'right-1'"
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
import { defineAsyncComponent, ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWheel } from '@/composition/handleWheel'
import Footer from '@/components/Footer.vue'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))

const showRestaurants = ref(false)
const showAttractions = ref(false)

const routeRef = ref()
const routeRefTranslateY = ref<number>()
const translateY = computed(() => `translateY(${routeRefTranslateY.value}px)`)

const { wheelDirection } = useWheel()

watch(wheelDirection, (direction) => {
  if (direction === 'down') {
    routeRefTranslateY.value = 0
  } else if (direction === 'up') {
    const height: number = routeRef.value.offsetHeight
    routeRefTranslateY.value = height
  }
})

const route = useRoute()
console.log('log => ', route.query)

const setRoutePanel = () => {
  setTimeout(() => {
    routeRef.value.style.transition = 'transform 0.3s'
  }, 300)
  const height: number = routeRef.value.offsetHeight
  routeRefTranslateY.value = height
}

onMounted(() => {
  setRoutePanel()
})
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
