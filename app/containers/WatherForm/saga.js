import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_WATHER, SET_WATHER } from './constants';
import * as watherServices from '../../API/watherServices';

function* getWather(action) {
  console.log('action from places saga', action);
  const result = yield call(watherServices.get);
  yield put({
    type: SET_WATHER,
    places: result.data,
  });
}

export default function* getWatherSaga() {
  yield takeEvery(GET_WATHER, getWather);
}
