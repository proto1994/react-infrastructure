import React from 'react';
import {BrowserRouter, HashRouter, Switch, Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './smart/app';
import Login from './smart/login';

const isAuth = false;
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return isAuth === true ?
            <Component {...props} /> :
            <Redirect to={{pathname: "/login"}} />
    }} />
);

class ConfigRouter extends React.Component  {
    render() {
       const {store, history} = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <App>
                            <PrivateRoute  path="/" component={App} />
                        </App>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default ConfigRouter;