import { GET_WEATHER, SET_WEATHER } from './constants';

export function getWeather() {
  return {
    type: GET_WEATHER,
  };
}
export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    weather,
  };
}
