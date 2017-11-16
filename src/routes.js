import React from 'react';
import {BrowserRouter, HashRouter, Switch, Router, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './views/app';
import Home from './views/Home';

class ConfigRouter extends React.Component  {
    render() {
       const {store, history} = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App>
                        <Route exact path="/home" component={Home}/>
                    </App>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default ConfigRouter;