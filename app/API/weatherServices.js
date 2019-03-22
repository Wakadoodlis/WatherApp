import axios from 'axios';
import apiKey from './apikey';

export function getData() {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${
      apiKey.APIKEY
    }&units=metric`,
  );
}
