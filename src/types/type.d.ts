type sortType = 'farToNear' | 'nearToFar'

interface City {
  chinese: string;
  eng: string;
}

interface BikeRoute {
  AuthorityName: string;
  City: string;
  CyclingLength: number;
  FinishedTime: string;
  Geometry: string;
  RoadSectionEnd: string;
  RoadSectionStart: string;
  RouteName: string;
  Town: string;
  UpdateTime: string;
  distance: string;
  photo: string;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Pages {
  current?: number;
  total?: number;
}
