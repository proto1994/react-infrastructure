import {take, fork, all, put, call} from 'redux-saga/effects';
import {takeEvery,delay} from 'redux-saga'
import * as homeRedux from './HomeRedux';


export function* watch() {
    while(true) {
        yield take(homeRedux.HOME_ADD);
        yield put(homeRedux.addCount());
    }
}
export function* test() {
    yield call(delay, 1000);
    yield put(homeRedux.addCount());
}


export default function* HomeRootSaga() {
    yield all([
        fork(watch)
    ])
}