import {take, fork, all, put, call} from 'redux-saga/effects';
import {takeEvery,delay} from 'redux-saga'
import * as homeRedux from './HomeRedux';
import {requestGetBooks} from '../../service/books';

export function* watch() {
    while(true) {
        yield take(homeRedux.HOME_ADD);
        yield call(getBooks);
    }
}
export function* getBooks() {
    const result = yield call(requestGetBooks);
}


export default function* HomeRootSaga() {
    yield all([
        fork(watch)
    ])
}