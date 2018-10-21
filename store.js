import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { actionTypes } from './actions';

const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0,
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light,
            });
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1,
            });
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1,
            });
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count,
            });
        default:
            return state;
    }
};

export function initializeStore(initialState = exampleInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );
}
