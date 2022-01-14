import axios from 'axios';
import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants';

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
        payload: error.response?.data?.message || error.message,
      });
    }
  };
}
