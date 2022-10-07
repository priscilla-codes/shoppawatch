import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from './api';

const initialState = {
  cart: {},
  quantity: 1
};

export const addToCartHandlerAsync = createAsyncThunk(
  'cart/addToCartHandler',
  async (product, thunkAPI) => {
    const globalState = thunkAPI.getState();
    const quantity = globalState.cart.quantity;

    if (quantity >= 1) {
      const response = await axios.post(api.addItem, {
        product_id: product.id,
        quantity
      });
      return response.data;
    }
  }
);

export const fetchCartAsync = createAsyncThunk(
  'cart/fetchCart',
  async thunkAPI => {
    const response = await axios.get(api.cart);

    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setQuantity: state => {
      state.quantity = 1;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(addToCartHandlerAsync.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  }
});

export const { setQuantity, setCart } = cartSlice.actions;

export const selectCart = state => {
  return state.cart.cart;
};
export const selectQuantity = state => {
  return state.cart.quantity;
};
export default cartSlice.reducer;
