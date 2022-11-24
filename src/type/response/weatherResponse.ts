export interface WeatherResponse {
  coord: CoordFromResponse;
  weather: WeatherFromResponse[]; // or Array<WeatherFromResponse[]
  base: string;
  main: MainFromResponse;
  visibility: number;
  wind: WindFromResponse;
  clouds: CloudsFromResponse;
  dt: number;
  sys: SysFromResponse;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CoordFromResponse {
  lon: number;
  lat: number;
}

export interface WeatherFromResponse {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainFromResponse {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WindFromResponse {
  speed: number;
  deg: number;
  gust: number;
}

export interface CloudsFromResponse {
  all: number;
}

export interface SysFromResponse {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
