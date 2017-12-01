import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux';
import home from './home';
import login from './login';
export default combineReducers({
    home,
    login,
    routing: routerReducer
})
