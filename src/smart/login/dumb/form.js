import React, {Component, PropTypes} from 'react';
import styles from './form.less';

class Form extends Component {
    login = () => {
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        if (!username || !password) {
            swal({
                title: '登录失败',
                text: "账号密码不能为空",
                icon: "error",
            });
            return;
        }
        this.props.loginActions({username, password});

    };
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.login__form__bd}>
                    <h1 className={styles.login__title}>React</h1>
                    <div className={styles.login__username}>
                        <span>账号：</span>
                        <input type="text" ref="username"  label="账号" placeholder="请输入用户名"/>
                    </div>
                    <div className={styles.login__password}>
                        <span>密码：</span>
                        <input type="text" ref="password" label="密码" placeholder="请输入密码"/>
                    </div>
                    <div className={styles.login__operator}>
                        <button onClick={this.login} className={styles.login__operator__in}>登录</button>
                        <p className={styles.login__operator__register}>没有账号？点击注册</p>
                    </div>
                </div>
            </div>
        )
    }
}

Form.propTypes = {};
export default Form;

