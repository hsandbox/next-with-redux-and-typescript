import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../actions';
import Examples from '../comonents/examples';

interface Props {
    dispatch: Dispatch<any>;
}

class Index extends React.Component<Props> {
    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req;
        reduxStore.dispatch(serverRenderClock(isServer));

        return {};
    }

    public timer;

    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <Examples />;
    }
}

export default connect()(Index);
