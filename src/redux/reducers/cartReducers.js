// @ts-nocheck

import { CART_ADD_ITEM } from '../constants/cartConstants';

const cartState = {
  cartItems: [],
};

export const cartReducer = (state = cartState, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            return cartItem._id === existingItem._id ? item : cartItem;
          }),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    default:
      return state;
  }
};
