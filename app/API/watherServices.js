import axios from 'axios';
import apiKey from './apikey';

export function get() {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`,
  );
}
