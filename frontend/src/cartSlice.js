import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from './api';

export const clearCartOnServer = createAsyncThunk(
  'cart/clearCartOnServer',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.delete(api.clearCart, { 
        withCredentials: true 
      });
      return response.data;
    } catch (error) {
      console.error("Error clearing cart on server:", error);
      
      // If the clear_cart endpoint fails, try to remove each item individually
      try {
        const response = await axios.get(api.cart, {
          withCredentials: true
        });
        
        const cartItems = response.data.cart_items || [];
        
        for (const item of cartItems) {
          await axios.delete(api.removeItem, {
            data: { cart_item_id: item.id },
            withCredentials: true
          });
        }
        
        const updatedCartResponse = await axios.get(api.cart, {
          withCredentials: true
        });
        
        return updatedCartResponse.data;
      } catch (secondError) {
        console.error('Error removing items individually:', secondError);
        return rejectWithValue(secondError.response?.data || "Failed to clear cart");
      }
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { dispatch }) => {
    try {
      return {
        cart_items: [],
        total_price: 0
      };
    } catch (error) {
      console.error("Error in clearCart:", error);
      return {
        cart_items: [],
        total_price: 0
      };
    }
  }
);

export const fetchCartAsync = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(api.cart, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      return { cart_items: [], total_price: 0 };
    }
  }
);

export const addToCartHandlerAsync = createAsyncThunk(
  'cart/addToCartHandler',
  async (product, thunkAPI) => {
    try {
      const globalState = thunkAPI.getState();
      const quantity = globalState.cart.quantity;

      if (quantity >= 1) {
        await axios.get(api.cart, { withCredentials: true });
        
        const response = await axios.post(api.addItem, {
          product_id: product.id,
          quantity
        }, { withCredentials: true });
        
        return response.data;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      return thunkAPI.rejectWithValue("Failed to add item to cart");
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart_items: [],
    total_price: 0,
    total_items: 0,
    quantity: 1,
  },
  reducers: {
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setCart: (state, action) => {
      if (action.payload) {
        state.cart_items = action.payload.cart_items || [];
        state.total_price = action.payload.total_price || 0;
        state.total_items = action.payload.cart_items ? action.payload.cart_items.length : 0;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(addToCartHandlerAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.cart_items = action.payload.cart_items || [];
          state.total_price = action.payload.total_price || 0;
          state.total_items = action.payload.cart_items ? action.payload.cart_items.length : 0;
        }
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.cart_items = action.payload.cart_items || [];
          state.total_price = action.payload.total_price || 0;
          state.total_items = action.payload.cart_items ? action.payload.cart_items.length : 0;
        }
      })
      .addCase(fetchCartAsync.rejected, (state, action) => {
        console.error("fetchCartAsync rejected:", action.error);
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.cart_items = [];
        state.total_price = 0;
        state.total_items = 0;
      })
      .addCase(clearCartOnServer.fulfilled, (state, action) => {
        state.cart_items = [];
        state.total_price = 0;
        state.total_items = 0;
      });
  }
});

export const { setQuantity, setCart } = cartSlice.actions;

export const selectCart = state => state.cart;
export const selectQuantity = state => state.cart.quantity;

export default cartSlice.reducer;
