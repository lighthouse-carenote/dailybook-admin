import { all, /*call, put, */ takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/store/util';
import { PROFILE_GET, PROFILE_GET_REQUEST } from './profileStore';
import AuthApi from '../../util/request/AuthApi';

const api = new AuthApi();

const successCb = function* () {
  // yield put(initGlobalState());
  // yield call(callback, 'path');
};

const profileGet$ = makeApiCallSagaFunc({
  type: PROFILE_GET,
  apiFunc: api.getProfile.bind(api),
  successCb,
});

export function* profileGetSaga() {
  yield all([takeLatest(PROFILE_GET_REQUEST, profileGet$)]);
}
