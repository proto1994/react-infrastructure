import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import Form from './dumb/form';
import {loginActions} from '../../ducks/login';
class Login extends React.Component {

    constructor() {
        super();

    }

    render() {
        const {
            props: {
                loginActions
            }
        } = this;
        return (
            <div>
                <Form
                    loginActions={loginActions}
                />
            </div>
        )
    }
}
Login.propTypes = {};
export default connect(null, {loginActions})(Login);