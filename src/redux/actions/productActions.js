import axios from 'axios';
import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export function fetchAllProducts() {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const apiUrl = process.env.REACT_APP_BACKEND_API;
      const { data } = await axios.get(`${apiUrl}/products`);

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        payload: error.response?.data || error,
      });
    }
  };
}

export function fetchOneProduct(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const apiUrl = process.env.REACT_APP_BACKEND_API;
      const { data } = await axios.get(`${apiUrl}/products/${id}`);

      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAILURE,
        payload: error.response?.data || error,
      });
    }
  };
}
