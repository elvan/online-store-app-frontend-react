import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
