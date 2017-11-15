import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCount, reduceCount } from './HomeRedux';
import styles from './Content.less';
export class Content extends React.Component {
    render() {
        const { count, addCount, reduceCount } = this.props;
        return (
            <div>
                <button className={styles.content__button} onClick={() => { addCount() }}>增加</button>
                <p>{count}</p>
                <button className={styles.content__button} onClick={() => { reduceCount() }}>减少</button>
            </div>
        )
    }
}

Content.propTypes = {
    count: PropTypes.number.isRequired,
    addCount: PropTypes.func.isRequired,
    reduceCount: PropTypes.func.isRequired,
}
export default connect((state) => {
    const { count } = state.home;
    return {
        count
    };
}, { addCount, reduceCount })(Content);