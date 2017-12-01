import {take, fork, all, put, call} from 'redux-saga/effects';
import {takeEvery,delay} from 'redux-saga';
import {requestGetBooks} from '../service/books';
export const initState = {
    count: 3
};

export const HOME_ADD = "HOME_ADD";
export const HOME_REDUCE = "HOME_REDUCE";

export function addCount() {
    return {
        type: HOME_ADD
    }
}

export function reduceCount() {
    return {
        type: HOME_REDUCE
    }
}

export default function reducer(state=initState, action) {
    switch (action.type) {
        case HOME_ADD:
            return {
                ...state,
                count: ++state.count
            }
        case HOME_REDUCE:
            return {
                ...state,
                count: --state.count
            }
        default:
            return state;
    }
};


function* watch() {
    while(true) {
        yield take(HOME_ADD);
        yield call(getBooks);
    }
}
function* getBooks() {
    const result = yield call(requestGetBooks);
}


export function* rootHomeSaga() {
    yield all([
        fork(watch)
    ])
}

