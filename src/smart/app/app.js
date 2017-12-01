import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
const App = ({children, history, dispatch}) => {
    return (
        <div>
            <button onClick={() => {dispatch(push("/home"))}} style={{padding:5}}>查看文章</button>
            {children}
        </div>
    )
}

export default withRouter(connect()(App));