import request from './request';

export const requestGetBooks = () => {
    return request(`/getbooks`,{
        method:'get'
    });
}