import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, quantity) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        _id: data.product._id,
        name: data.product.name,
        image: data.product.image,
        price: data.product.price,
        countInStock: data.product.countInStock,
        quantity: quantity,
      },
    });

    localStorage.setItem(
      'online-store-app-cart-items',
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
