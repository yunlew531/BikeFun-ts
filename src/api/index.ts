import tdxReq from './tdxReq'
import mockyReq from './mockyReq'

// tdx server
export const apiSearchRoute = (city: string, searchText?: string): Promise<{ data: BikeRoute[]; }> =>
  tdxReq.get(`/v2/Cycling/Shape/${city}/${searchText ? `?$filter=contains(RouteName, '${searchText}')` : ''}`)
export const apiGetNearRestaurants = (lat: number, lon: number) =>
  tdxReq.get(`/v2/Tourism/Restaurant?$spatialFilter=nearby(${lat}, ${lon}, 5000)`)
export const apiGetNearAttractions = (lat: number, lon: number) =>
  tdxReq.get(`/v2/Tourism/ScenicSpot?$spatialFilter=nearby(${lat}, ${lon}, 5000)`)

// mocky server
export const apiGetPhotos = () => mockyReq.get('/v3/597bbe5a-a110-4314-83dd-c8207cec80bf')
