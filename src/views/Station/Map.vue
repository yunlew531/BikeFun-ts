<template>
  <div class="wrap flex overflow-hidden">
    <div class="flex flex-col w-96 border-r border-l border-gray-100">
      <h3 class="h-16 flex justify-center items-center text-white-100 text-lg font-bold bg-yellow-100">站點列表</h3>
      <StationList
        :stations="stations"
        :currentStation="currentStation"
        @updateCurrentStation="updateCurrentStation"
      />
    </div>
    <div class="flex-grow flex flex-col border-r border-gray-100">
      <div class="flex items-center px-8 py-4">
        <router-link to="/" class="text-dark-200">首頁</router-link>
        <span class="material-icons mx-1">chevron_right</span>
        <router-link to="/station" class="text-dark-200">尋找站點</router-link>
        <span class="material-icons mx-1">chevron_right</span>
        <h4 class="text-green-100">尋找站點</h4>
      </div>
      <StationMap
        class="h-full"
        :stations="stations"
        :currentStation="currentStation"
        @updateCurrentStation="updateCurrentStation"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { apiGetStations, apiGetBikeQty } from '@/api'
import { chineseToEng } from '@/mixins/translateCity'
import 'simplebar-vue/dist/simplebar-vue.js'
import 'simplebar-vue/dist/simplebar.min.css'
import StationMap from '@/components/Station/StationMap.vue'
const StationList = defineAsyncComponent(() => import('@/components/Station/StationList.vue'))

const route = useRoute()

const currentStation = ref<BikeStation>({})
const stations = ref<BikeStation[]>([])
const getStations = async () => {
  const { _city, _content } = route.query
  if (!_city) return
  const engCity = chineseToEng(_city as string)
  try {
    const { data } = await apiGetStations(engCity, _content as string)
    const stationsObj = {} as { [key: string]: BikeStation }
    data.forEach((station: BikeStation) => {
      const uid = station.StationUID
      if (uid) stationsObj[uid] = station
    })
    getBikeQty(stationsObj)
  } catch (err) { console.dir(err) }
}

const updateCurrentStation = (station: BikeStation) => { currentStation.value = station }

const getBikeQty = async (stationsObj: { [key: string]: BikeStation}) => {
  const { _city } = route.query
  if (!_city) return
  const engCity = chineseToEng(route.query._city as string)
  try {
    const { data } = await apiGetBikeQty(engCity)
    data.forEach((station: BikeStation) => {
      const uid = station.StationUID
      if (!uid || !stationsObj[uid]?.StationName) return
      stationsObj[uid] = { ...stationsObj[uid], ...station }
    })
    stations.value = Object.values(stationsObj)
  } catch (err) { console.dir(err) }
}

watch(() => route.query, (query) => {
  const { _city } = query
  if (_city) {
    getStations()
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 96px - 81px);
}
</style>
