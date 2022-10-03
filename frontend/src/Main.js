import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCart, fetchCartAsync } from './cartSlice';
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
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const handleLogin = data => {
    setLoggedInStatus('LOGGED_IN');
    setUser(data.user);
    dispatch(setCart(data.user_cart));
  };

  const handleLogout = data => {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUser({});
  };

  const checkLoginStatus = () => {
    axios
      .get(`${api.loggedIn}`, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          setLoggedInStatus('LOGGED_IN');
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
          setLoggedInStatus('NOT_LOGGED_IN');
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
    checkLoginStatus();
  }, []);

  return (
    <BrowserRouter>
      <MainWrapper>
        <Switch>
          <Route path="/" exact>
            <HomePage
              usCurrency={usCurrency}
              loggedInStatus={loggedInStatus}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/search/:keyword" exact>
            <SearchPage
              usCurrency={usCurrency}
              loggedInStatus={loggedInStatus}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/products/:id">
            <ProductPage
              loggedInStatus={loggedInStatus}
              usCurrency={usCurrency}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/cart">
            <CartPage
              usCurrency={usCurrency}
              handleLogout={handleLogout}
              loggedInStatus={loggedInStatus}
            />
          </Route>
          <Route path="/checkout">
            {loggedInStatus === 'LOGGED_IN' && (
              <CheckoutPage usCurrency={usCurrency} />
            )}
            {loggedInStatus === 'NOT_LOGGED_IN' && <Redirect to="/signin" />}
          </Route>
          <Route path="/signup">
            {loggedInStatus === 'LOGGED_IN' && <Redirect to="/" />}
            {loggedInStatus === 'NOT_LOGGED_IN' && (
              <SignupPage handleLogin={handleLogin}></SignupPage>
            )}
          </Route>
          <Route path="/signin">
            {loggedInStatus === 'LOGGED_IN' && <Redirect to="/" />}
            {loggedInStatus === 'NOT_LOGGED_IN' && (
              <SigninPage handleLogin={handleLogin}></SigninPage>
            )}
          </Route>
        </Switch>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default Main;
