type sortType = 'farToNear' | 'nearToFar'

interface City {
  chinese: string;
  eng: string;
}

interface BikeRoute {
  AuthorityName?: string;
  City?: string;
  CyclingLength?: number;
  FinishedTime?: string;
  Geometry?: string;
  RoadSectionEnd?: string;
  RoadSectionStart?: string;
  RouteName?: string;
  Town?: string;
  UpdateTime?: string;
  distance?: string;
  photo?: string;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Pages {
  current?: number;
  total?: number;
}

type LatLonArr = Array<[number, number]>

interface RestaurantPosition {
  PositionLat: number;
  PositionLon: number;
}

interface NearRestaurant {
  Address: string;
  City: string;
  Description: string;
  ID: string;
  RestaurantName: string;
  OpenTime: string;
  ParkingInfo: string;
  Phone: string;
  Position: RestaurantPosition;
  ZipCode: string;
  Picture: { PictureUrl1: string }
}

interface NearAttraction {
  Address: string;
  City: string;
  Description: string;
  ID: string;
  ScenicSpotName: string;
  OpenTime: string;
  ParkingInfo: string;
  Phone: string;
  Position: RestaurantPosition;
  ZipCode: string;
  Picture: { PictureUrl1: string }
}

interface BikeStation {
  // eslint-disable-next-line camelcase
  StationAddress?: { Zh_tw: string }
  StationUID?: string;
  // eslint-disable-next-line camelcase
  StationName?: { Zh_tw }
  StationPosition?: { PositionLat: number, PositionLon: number }
  AvailableRentBikes?: number;
  AvailableReturnBikes?: number;
  ServiceType?: number;
  ServiceStatus?: number;
}
