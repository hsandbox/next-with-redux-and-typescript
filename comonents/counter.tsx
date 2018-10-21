import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../actions';

interface Props {
    dispatch: Dispatch<any>;
    count: number;
}

class Counter extends Component<Props> {
    increment = () => {
        const { dispatch } = this.props;
        dispatch(incrementCount());
    };

    decrement = () => {
        const { dispatch } = this.props;
        dispatch(decrementCount());
    };

    reset = () => {
        const { dispatch } = this.props;
        dispatch(resetCount());
    };

    render() {
        const { count } = this.props;
        return (
            <div>
                <h1>
                    Count: <span>{count}</span>
                </h1>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { count } = state;
    return { count };
}

export default connect(mapStateToProps)(Counter);
