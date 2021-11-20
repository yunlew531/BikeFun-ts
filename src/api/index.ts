import tdxReq from './tdxReq'
import mockyReq from './mockyReq'

export const apiSearchRoute = (city: string, searchText?: string): Promise<{ data: BikeRoute[]; }> =>
  tdxReq.get(`/v2/Cycling/Shape/${city}/${searchText ? `?$filter=contains(RouteName, '${searchText}')` : ''}`)

export const apiGetPhotos = () => mockyReq.get('/v3/597bbe5a-a110-4314-83dd-c8207cec80bf')
