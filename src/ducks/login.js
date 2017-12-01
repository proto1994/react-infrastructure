import {take, all, fork, put, call} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {requestLogin} from '../service/login';
const initState = {
    token: '',
    username: ''
};

const LOGIN = 'LOGIN';
const LOGIN_INFO = 'LOGIN_INFO'

export function loginActions({username, password}) {
    return {
        type: LOGIN,
        payload: {username, password}
    }
}

export default function loginReducer(state=initState, {type, payload}) {
    switch (type) {
        case LOGIN_INFO:
            return {
                ...state,
                token: payload.token,
                username: payload.username
            };
        default:
            return {...state};
    }
}

function* watchLogin() {
    while (true) {
        const {payload: {username,password}} = yield take(LOGIN);
        yield call(getToken, {username, password});
    }
}

function* getToken({username, password}) {
    try {
        const {token} =  yield call(requestLogin, {username, password});
        yield put({
            type: LOGIN_INFO,
            payload: {username, token}
        })
    } catch (e) {
        console.log(e);
    }


}

export function* rootLoginSaga() {
    yield all([
        fork(watchLogin)
    ])
}