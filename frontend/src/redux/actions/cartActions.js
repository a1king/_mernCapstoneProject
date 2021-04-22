import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data_id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSONstringify(getState().cart.cartItems));
};

export const removeFromCart = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify().cart.cartItems);
};
