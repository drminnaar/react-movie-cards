import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import { app } from '../reducers';

const middlewares = [thunk];
let composeEnhancers = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    middlewares.push(reduxLogger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
    app,
    composeEnhancers(applyMiddleware(...middlewares))
);
  