import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Routes from './routes';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import 'sweetalert';
import "./index.less";
import configureStore from './store';
const history = createHistory();
const store = configureStore(history);
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} history={history}/>
        </AppContainer>,
        document.getElementById("root")
    )
}                                                    
render(Routes)    
if (module.hot) {
    module.hot.accept('./routes', () => { render(Routes) })
  } 