import React from 'react';
import {withRouter} from 'react-router';
const App = ({children}) => {
    return (
        <div>
           <h1 style={{color:"green"}}>react热加载、时间旅行、单元测试</h1>
            {children}
        </div>
    )
}

export default withRouter(App);