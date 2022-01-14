import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

//  PRODUCT_LIST

const productListState = {
  products: [],
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
        message: action.payload.message,
        products: action.payload.products,
      };
    case PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

// PRODUCT_DETAILS

const productDetailsState = {
  product: {
    reviews: [],
  },
};

export function productDetailsReducer(state = productDetailsState, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        product: action.payload.product,
      };
    case PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
