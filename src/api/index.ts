import tdxReq from './tdxReq'
import mockyReq from './mockyReq'

// tdx server
export const apiSearchRoute = (city: string, searchText?: string): Promise<{ data: BikeRoute[]; }> =>
  tdxReq.get(`/v2/Cycling/Shape/${city}/${searchText ? `?$filter=contains(RouteName, '${searchText}')` : ''}`)
export const apiGetNearRestaurants = (lat: number, lon: number) =>
  tdxReq.get(`/v2/Tourism/Restaurant?$spatialFilter=nearby(${lat}, ${lon}, 5000)`)
export const apiGetNearAttractions = (lat: number, lon: number) =>
  tdxReq.get(`/v2/Tourism/ScenicSpot?$spatialFilter=nearby(${lat}, ${lon}, 5000)`)
export const apiGetStations = (city: string, searchText?: string) =>
  tdxReq.get(`/v2/Bike/Station/${city}${searchText ? `?$filter=contains(StationName, ${searchText})` : ''}`)
export const apiGetBikeQty = (city: string, searchText?: string) =>
  tdxReq.get(`/v2/Bike/Availability/${city}${searchText ? `?$filter=contains(StationName, ${searchText})` : ''}`)

// mocky server
export const apiGetPhotos = () => mockyReq.get('/v3/597bbe5a-a110-4314-83dd-c8207cec80bf')
