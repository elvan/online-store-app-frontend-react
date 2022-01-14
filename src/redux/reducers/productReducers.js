import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants';

const productListState = {
  productList: [],
};

export function productListReducer(state = productListState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
