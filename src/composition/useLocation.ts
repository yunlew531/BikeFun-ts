import { readonly, ref } from 'vue'

export default () => {
  const myLocation = ref<Coordinate>()

  const getLocation = (): Coordinate | void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        myLocation.value = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    }
  }

  return {
    myLocation: readonly(myLocation),
    getLocation
  }
}
