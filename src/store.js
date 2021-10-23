import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools, composeWithDevtools } from 'redux-devtools-extension';

import { productReducer } from './reducers/productReducers';

const reducer = combineReducers({
    product: productReducer,
});

const initalState = {};

const middleware = [thunk];

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;