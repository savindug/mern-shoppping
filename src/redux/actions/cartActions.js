import * as ActionTypes from '../const/cartConst';
import axios from 'axios';

const api = 'https://exp-auth-api.herokuapp.com';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${api}/products/${id}`);

  dispatch({
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      quantity: data.quantity,
      qty,
    },
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
