import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from './api';
import { setCart } from './cartSlice';

export const LOGGED_IN = 'LOGGED_IN';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';

const initialState = {
  user: {},
  loggedInStatus: NOT_LOGGED_IN,
  errorMessage: ''
};

export const signinAsync = createAsyncThunk(
  'auth/signin',
  async (signinInfo, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    const response = await axios.post(
      `${api.sessions}`,
      {
        user: {
          email: signinInfo.email,
          password: signinInfo.password
        }
      },
      { withCredentials: true }
    );
    if (response.data.logged_in) {
      dispatch(handleLogin(response.data));
      dispatch(setUser(response.data));
      dispatch(setCart(response.data.user_cart));
    }
    return response.data;
  }
);

export const signupAsync = createAsyncThunk(
  'auth/signup',
  async (signupInfo, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    const response = await axios.post(
      `${api.registrations}`,
      {
        user: {
          name: signupInfo.name,
          email: signupInfo.email,
          password: signupInfo.password
        }
      },
      { withCredentials: true }
    );
    if (response.data.status === 'created') {
      dispatch(handleLogin(response.data));
      dispatch(setUser(response.data));
    }
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.loggedInStatus = LOGGED_IN;
      state.user = action.payload.user;
    },
    handleLogout: state => {
      state.loggedInStatus = NOT_LOGGED_IN;
      state.user = {};
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    selectLoggedInStatus: (state, action) => {
      state.loggedInStatus = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signinAsync.fulfilled, (state, action) => {
        if (action.payload.status === 401) {
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        if (action.payload.status === 422) {
          state.errorMessage = action.payload.message;
        }
      });
  }
});

export const {
  handleLogin,
  handleLogout,
  setLoggedInStatus,
  setUser,
  setErrorMessage
} = authSlice.actions;
export const selectLoggedInStatus = state => {
  return state.auth.loggedInStatus;
};
export const selectErrorMessage = state => {
  return state.auth.errorMessage;
};
export default authSlice.reducer;
