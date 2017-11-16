import axios from 'axios';
import querystring from 'query-string';
const baseUrl = process.env.NODE_ENV !== 'production' ? 
                "http://www.easy-mock.com/mock/5a0cf3511e9be34076f9175f" :  "正式环境地址";
export  default async function request(url, options = {}) {
    let params = {},
        method = (options.method || 'get').toLowerCase(),
        data = options.data || {};
    params.url = url;
    params.method = method;
    params.baseURL = baseUrl;
    switch(method){
        case 'get' :
            params.params = data;
            break;
        case 'post' :
            params.data = querystring.stringify(data);
            break;
        case 'delete' :
            params.params = data;
            break;
        case 'put' :
            params.data = querystring.stringify(data);
            break;
    }
    let token = window.localStorage.getItem("token");
    if (token) {
        params.headers = { Authorization: token };
    }
    // catch写在前面能阻断model effect里面的执行
    return await axios(params).catch(errHandle).then(parse);
}
function errHandle(res) {
   alert("错误"+JSON.stringify(res));
}
function parse(response) {
    let result = response.data;
    if (!result) {
        throw "服务器返回数据错误";
    }
    if (result.errcode == 401) {
        throw result;
    }
    if (result.errcode != 0) {
        throw result;
    }
    return result.data;
}