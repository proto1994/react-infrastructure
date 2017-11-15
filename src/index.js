import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Routes from './routes';
import { AppContainer } from 'react-hot-loader';
import "./index.less";
import configureStore from './store';
const store = configureStore();
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store}/>
        </AppContainer>,
        document.getElementById("root")
    )
}                                                    
render(Routes)    
if (module.hot) {
    module.hot.accept('./routes', () => { render(Routes) })
  } 