// @ts-nocheck

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const cartItemsFromStorage = localStorage.getItem('online-store-app-cart-items')
  ? JSON.parse(localStorage.getItem('online-store-app-cart-items'))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const middleware = [thunk];

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
