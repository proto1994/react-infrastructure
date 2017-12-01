import { fork, all } from 'redux-saga/effects'
import {rootLoginSaga} from './login';

export default function* rootSaga() {
    yield all([
        fork(rootLoginSaga)
    ])
}