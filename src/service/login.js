import request from './request';

export const requestLogin = (data) => {
    return request('/login', {
        method: 'post',
        data
    })
};