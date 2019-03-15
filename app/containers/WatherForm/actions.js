import { GET_WATHER, SET_WATHER } from './constants';

export function getWather() {
  return {
    type: GET_WATHER,
  };
}
export function setWather(wather) {
  return {
    type: SET_WATHER,
    wather,
  };
}
