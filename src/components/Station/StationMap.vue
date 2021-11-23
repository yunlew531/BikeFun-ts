<template>
  <div>
    <div id="map-wrap" class="h-full"></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, watch } from 'vue'
import { useRoute } from 'vue-router'
import L from 'leaflet'
import 'leaflet.markercluster/dist/leaflet.markercluster.js'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

const route = useRoute()

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

let greenIcon: unknown,
  redIcon: unknown,
  yellowIcon: unknown,
  whiteIcon: unknown

const createIcon = () => {
  const iconOptions = { iconSize: [56, 56], iconAnchor: [0, 0] }
  greenIcon = new L.Icon({
    ...iconOptions,
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Fbike%20station.png?alt=media&token=3b1c1f61-1e94-492c-90d4-796825e9ca67'
  })
  redIcon = new L.Icon({
    ...iconOptions,
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Fbike%20station-1.png?alt=media&token=639984c2-8552-419f-9223-d00048bbcefc'
  })
  yellowIcon = new L.Icon({
    ...iconOptions,
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Fbike%20station-y.png?alt=media&token=4ad5bd0f-1bdc-4371-8226-adbdb991a519'
  })
  whiteIcon = new L.Icon({
    ...iconOptions,
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2FEllipse%206-current.png?alt=media&token=68094dd1-bebe-4ef4-a64a-87c0bed1f0cb',
    shadowUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Fshadow.png?alt=media&token=6eadc4bc-2099-4771-8b99-ca81a7b49d3d',
    shadowSize: [50, 50],
    shadowAnchor: [5, -7]
  })
}
createIcon()

const markers = L.markerClusterGroup({ maxClusterRadius: 10 })

let map: any
const createMap = () => {
  const { PositionLat, PositionLon } = props.stations[0].StationPosition!
  map = L.map('map-wrap').setView([PositionLat, PositionLon], 11)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
  createMarkers()
}

const emits = defineEmits(['updateCurrentStation'])

function handleMarkerClick () {
  // @ts-ignore
  const uid = this.uid
  const idx = props.stations.findIndex(station => station.StationUID === uid)
  const station = props.stations[idx]
  emits('updateCurrentStation', station)
}

const markerInstances: any = []
const createMarkers = () => {
  props.stations.map(station => {
    const icon = chooseIcon(station)

    const { PositionLat, PositionLon } = station.StationPosition!
    const marker = L.marker([PositionLat, PositionLon], { icon }).on('click', handleMarkerClick)
    marker.uid = station.StationUID
    markerInstances.push(marker)
    return marker
  }).forEach(marker => { markers.addLayer(marker) })
  map.addLayer(markers)
}

const chooseIcon = (station: BikeStation) => {
  let icon
  if (station.AvailableReturnBikes! === 0) icon = redIcon
  else if (station.AvailableRentBikes === 0) icon = yellowIcon
  else icon = greenIcon
  return icon
}

watch(() => props.stations, () => {
  createMap()
})

let prevStationIcon: unknown
watch(() => props.currentStation, (next, prev) => {
  if (prev.StationUID) {
    const prevUid = prev.StationUID
    const prevIdx = props.stations.findIndex(station => station.StationUID === prevUid)
    const prevMarker = markerInstances[prevIdx]
    prevMarker.setIcon(prevStationIcon)
  }

  const { PositionLat, PositionLon } = next.StationPosition!
  const uid = next.StationUID
  const idx = props.stations.findIndex(station => station.StationUID === uid)
  const targetMarker = markerInstances[idx]
  prevStationIcon = targetMarker.getIcon()
  targetMarker.setIcon(whiteIcon)
  map.flyTo([PositionLat, PositionLon], 18)
})

watch(() => route.query, () => {
  map.remove()
})
</script>
