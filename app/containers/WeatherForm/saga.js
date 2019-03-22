import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_WEATHER, SET_WEATHER } from './constants';
import * as weatherServices from '../../API/weatherServices';

function* getWeather(action) {
  try {
    console.log('action from weather saga', action);
    const result = yield call(weatherServices.getData);
    yield put({
      type: SET_WEATHER,
      weather: result.data,
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* getWeatherSaga() {
  yield takeEvery(GET_WEATHER, getWeather);
}

// yield takeEvery(
//   actions =>
//     actions.type === 'GET_WEATHER' && Object.keys(actions).length === 1,
//   getWeather,
// );
