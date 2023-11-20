/* eslint-disable max-len */
import apiProfileGet from './api/profile/profileStore';
import globalModal from './modal';
import { profileGetSaga } from './api';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  apiProfileGet,
  globalModal,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([profileGetSaga()]);
}
