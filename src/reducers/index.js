import {combineReducers} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import home from '../components/home/HomeRedux';

export default combineReducers({
    home,
    router: routerReducer
})