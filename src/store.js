import {createStore, replaceReducer, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import rootReducer from './ducks/reducers';
import rootSaga from './ducks/sagas';
function configureStore(history) {
    const sagaMiddleware = createSagaMiddleware();
    let store = '';
    const middleware = [routerMiddleware(history), sagaMiddleware];
    if (process.env.NODE_ENV !== 'production') {
        store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
    } else {
        store = createStore(rootReducer, applyMiddleware(...middleware));
    }
    store.runSaga = sagaMiddleware.run;
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./ducks/reducers', () => {
            const nextRootReducer = require('./ducks/reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    store.runSaga(rootSaga).done.catch((error) => console.warn(error));
    return store;
}

export default configureStore