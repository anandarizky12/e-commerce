import {createStore , combineReducers, applyMiddleware, compose} from 'redux';
import {productListReducers} from './reducers/productListReducers';
import {productDetailsReducers} from './reducers/productListReducers';
import thunk from 'redux-thunk';

const initialState = {};

const reducers = combineReducers({
    productList : productListReducers, 
    productDetails : productDetailsReducers
});

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;