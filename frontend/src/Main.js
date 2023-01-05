import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLoggedInStatus,
  setLoggedInStatus,
  LOGGED_IN,
  NOT_LOGGED_IN,
  setUser
} from './authSlice';
import { setQuantity, fetchCartAsync } from './cartSlice';
import axios from 'axios';
import api from './api';

// Components
import MainWrapper from './components/MainWrapper';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import CheckoutPage from './pages/CheckoutPage';
import SearchPage from './pages/SearchPage';

function Main() {
  const loggedInStatus = useSelector(selectLoggedInStatus);
  const dispatch = useDispatch();

  const checkLoginStatus = () => {
    axios
      .get(`${api.loggedIn}`, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && loggedInStatus === NOT_LOGGED_IN) {
          setLoggedInStatus(LOGGED_IN);
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === LOGGED_IN) {
          setLoggedInStatus(NOT_LOGGED_IN);
          setUser({});
        }
      })
      .catch(error => {
        console.log('check login error', error);
      });
  };

  const usCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  useEffect(() => {
    dispatch(fetchCartAsync());
    dispatch(setQuantity(1));
    checkLoginStatus();
  }, []);

  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage usCurrency={usCurrency} />}
          />
          <Route
            exact
            path="/search/:keyword"
            element={<SearchPage usCurrency={usCurrency} />}
          />
          <Route
            path="/products/:id"
            element={<ProductPage usCurrency={usCurrency} />}
          />
          <Route path="/cart" element={<CartPage usCurrency={usCurrency} />} />
          <Route
            path="/checkout"
            element={
              loggedInStatus === LOGGED_IN ? (
                <CheckoutPage usCurrency={usCurrency} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default Main;
