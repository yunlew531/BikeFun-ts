<template>
  <div>
    <div id="map-container" class="map-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  bikeLine: {
    type: Array as PropType<LatLonArr>,
    required: true
  },
  restaurants: {
    type: Array as PropType<NearRestaurant[]>,
    default: () => ([])
  },
  attractions: {
    type: Array as PropType<NearAttraction[]>,
    default: () => ([])
  },
  kilometer: {
    type: Number,
    default: 0
  }
})

let map: any
const setMap = (latLonArr: LatLonArr) => {
  const zoom = props.kilometer > 7 ? 13 : 15
  const middleIdx = Math.floor(latLonArr.length / 2)
  map = L.map('map-container').setView(latLonArr[middleIdx], zoom)
  L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }).addTo(map)

  L.polyline(props.bikeLine).addTo(map)
}

let restaurantIcon: unknown
const createRestaurantIcon = () => {
  restaurantIcon = new L.Icon({
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Ffood.png?alt=media&token=657a583a-5d41-47c6-be7f-48e5875076ec',
    iconSize: [56, 56],
    iconAnchor: [12, 41],
    popupAnchor: [15, -45],
    tooltipAnchor: [45, -15],
    shadowSize: [41, 41]
  })
}
createRestaurantIcon()

let attractionIcon: unknown
const createAttractionIcon = () => {
  attractionIcon = new L.Icon({
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Fattraction.png?alt=media&token=73873d06-dbff-4885-b3fd-497cd733d86e',
    iconSize: [56, 56],
    iconAnchor: [12, 41],
    popupAnchor: [15, -45],
    tooltipAnchor: [45, -15],
    shadowSize: [41, 41]
  })
}
createAttractionIcon()

const emits = defineEmits(['hideRestaurant', 'hideAttraction'])

const restaurantMarkers: any[] = []
const setRestaurantMarkers = () => {
  if (!props.restaurants.length) {
    alert('這個地點附近沒有餐廳 !')
    emits('hideRestaurant')
    return
  }

  const { restaurants } = props
  restaurants.forEach((restaurant) => {
    const { Position, Name, Address, Phone, Picture } = restaurant
    const { PositionLat, PositionLon } = Position
    const marker = L.marker([PositionLat, PositionLon], { icon: restaurantIcon })
      .bindTooltip(Name, {
        permanent: true,
        direction: 'right'
      })
      .bindPopup(`
        <div class="flex items-stretch w-full h-full">
          <div class="flex-grow h-full pt-4 px-4 pb-6">
            <h3 class="text-yellow-100 text-lg pl-4 border-l-4 border-yellow-100 mb-2">${Name}</h3>
            <div class="flex">
              <span class="material-icons text-yellow-100 mr-1.5">room</span>
              <p class="text-dark-200 text-sm">${Address || '無地址'}</p>
            </div>
            <div class="flex items-center">
              <span class="material-icons text-yellow-100 mr-1.5">call</span>
              <a href="tel:${Phone}}" class="text-dark-200 text-sm">0${Phone.split('886-')[1]}</a>
            </div>
          </div>
          <div class="restaurant-photo flex-shrink-0" style="background-image: url(${Picture.PictureUrl1 || 'https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_960_720.jpg'})"></div>
        </div>
      `).addTo(map)
    restaurantMarkers.push(marker)
  })
}

const removeRestaurantMarkers = () => {
  restaurantMarkers.forEach((marker: any) => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker)
    }
  })
}

const attractionMarkers: any[] = []
const setAttractionMarkers = () => {
  if (!props.attractions.length) {
    alert('這個地點附近沒有景點 !')
    emits('hideAttraction')
    return
  }

  const { attractions } = props
  attractions.forEach((attraction) => {
    const { Position, Name, Address, Phone, Picture } = attraction
    const { PositionLat, PositionLon } = Position
    const marker = L.marker([PositionLat, PositionLon], { icon: attractionIcon })
      .bindTooltip(Name, {
        permanent: true,
        direction: 'right'
      })
      .bindPopup(`
        <div class="flex items-stretch w-full h-full">
          <div class="flex-grow h-full pt-4 px-4 pb-6">
            <h3 class="text-yellow-100 text-lg pl-4 border-l-4 border-yellow-100 mb-2">${Name}</h3>
            <div class="flex">
              <span class="material-icons text-yellow-100 mr-1.5">room</span>
              <p class="text-dark-200 text-sm">${Address || '無地址'}</p>
            </div>
            <div class="flex items-center">
              <span class="material-icons text-yellow-100 mr-1.5">call</span>
              <a href="tel:${Phone}}" class="text-dark-200 text-sm">0${Phone.split('886-')[1]}</a>
            </div>
          </div>
          <div class="restaurant-photo flex-shrink-0" style="background-image: url(${Picture.PictureUrl1 || 'https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_960_720.jpg'})"></div>
        </div>
      `).addTo(map)
    attractionMarkers.push(marker)
  })
}

const removeAttractionMarkers = () => {
  attractionMarkers.forEach((marker: any) => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker)
    }
  })
}

watch(() => props.bikeLine, (latLonArr) => {
  setMap(latLonArr)
})

defineExpose({
  setRestaurantMarkers,
  removeRestaurantMarkers,
  setAttractionMarkers,
  removeAttractionMarkers
})
</script>

<style lang="scss" scoped>
.map-container {
  height: 100%;
}
::v-deep(.leaflet-popup-content-wrapper) {
  @apply rounded-2xl overflow-hidden p-0;
  width: 353px;
  height: 157px;
  p {
    margin: 0;
  }
}
::v-deep(.leaflet-popup-content) {
  width: 100% !important;
  height: 100%;
  margin: 0;
}
::v-deep(.restaurant-photo) {
  width: 118px;
  background-position: center;
  background-size: cover;
}
</style>