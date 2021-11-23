<template>
  <div>
    <ul
      ref="stationListRef"
      class="station-list"
    >
      <li
        v-for="station in stations"
        :ref="(el: any) => stationRefs.push(el)"
        :key="station.StationUID"
        class="border-b border-gray-100 mr-3 -mb-px"
      >
        <div
          class="h-16 flex justify-center items-center cursor-pointer px-5 hover:bg-gray-50"
          :class="{ 'bg-yellow-200 shadow hover:bg-yellow-200': currentStation.StationUID === station.StationUID }"
          @click="toggleCurrentStation(station)"
        >
          <h2 class="text-dark-200 font-bold mr-auto">{{ formatName(station.StationName?.Zh_tw) }}</h2>
          <span v-if="station.AvailableReturnBikes === 0" class="text-sm text-red-500">車位滿載</span>
          <span v-else-if="station.AvailableRentBikes === 0" class="text-sm text-yellow-100">無車可借</span>
          <span v-else-if="station.ServiceStatus === 0" class="text-sm text-green-100">停止營運</span>
          <span v-else class="text-sm text-green-100">正常營運</span>
        </div>
        <div
          v-show="currentStation.StationUID === station.StationUID"
          class="px-5 py-5"
          :class="{ 'bg-white-200': currentStation.StationUID === station.StationUID }"
        >
          <div class="flex">
            <div class="mr-auto mb-6">
              <p>可租借車數：<span class="text-purple-100">{{ station.AvailableRentBikes }}</span></p>
              <p>可歸還車數：<span class="text-purple-100">{{ station.AvailableReturnBikes }}</span></p>
            </div>
            <span class="text-sm text-dark-200">{{ formatBikeVer(station.StationName?.Zh_tw) }}</span>
          </div>
          <p class="flex items-center text-green-100 mb-4">
            <span class="material-icons mr-1 text-yellow-100">room</span>
            <span class="text-dark-200">{{ station.StationAddress?.Zh_tw }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, PropType, ref, watch } from 'vue'
import SimpleBar from 'simplebar'

const props = defineProps({
  stations: {
    type: Array as PropType<BikeStation[]>,
    default: () => ([]),
    required: true
  },
  currentStation: {
    type: Object as PropType<BikeStation>,
    default: () => ({}),
    required: true
  }
})

let scrollbar: SimpleBar
const stationListRef = ref<HTMLElement>()
onMounted(() => {
  scrollbar = new SimpleBar(stationListRef.value!, { autoHide: false })
})

const stationRefs = ref<HTMLElement[]>([])
const formatName = (name: string) => name.split('_')[1] || name
const formatBikeVer = (name: string) => name.split('_')[0].match('YouBike') ? name.split('_')[0] : ''

const emits = defineEmits(['updateCurrentStation'])
const toggleCurrentStation = (station: BikeStation) => {
  if (props.currentStation.StationUID === station.StationUID) {
    emits('updateCurrentStation', {})
  } else {
    emits('updateCurrentStation', station)
  }
}

watch(() => props.currentStation, (v) => {
  const currentOpenIdx = props.stations.findIndex(station => station.StationUID === v.StationUID)
  nextTick(() => {
    const offsetTop = stationRefs.value[currentOpenIdx].offsetTop
    if (offsetTop) {
      scrollbar.getScrollElement().scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  })
})
</script>

<style lang="scss" scoped>
.station-list {
  height: calc(100vh - 96px - 81px - 80px);
}
</style>
