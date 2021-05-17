import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './api';

// Components
import MainWrapper from './components/MainWrapper';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';

function Main() {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});

  const addToCartHandler = async product => {
    if (quantity >= 1) {
      const response = await axios.post(`${api.addItem}`, {
        product_id: product.id,
        quantity
      });

      setCart(response.data);
    }
  };

  const fetchCart = async () => {
    const response = await axios.get(api.cart);

    setCart(response.data);
  };

  const getQuantity = e => {
    setQuantity(e.target.valueAsNumber || e.target.value);
  };

  const increaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    } else if (typeof quantity === 'string') {
      setQuantity(1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleLogin = data => {
    setLoggedInStatus('LOGGED_IN');
    setUser(data.user);
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
    fetchCart();
    checkLoginStatus();
  }, []);

  return (
    <BrowserRouter>
      <MainWrapper>
        <Switch>
          <Route path="/" exact>
            <HomePage
              addToCartHandler={addToCartHandler}
              setQuantity={setQuantity}
              quantity={quantity}
              usCurrency={usCurrency}
              cart={cart}
              loggedInStatus={loggedInStatus}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/products/:id">
            <ProductPage
              addToCartHandler={addToCartHandler}
              getQuantity={getQuantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              setQauntity={setQuantity}
              quantity={quantity}
              usCurrency={usCurrency}
              handleLogout={handleLogout}
              cart={cart}
            />
          </Route>
          <Route path="/cart">
            <CartPage
              cart={cart}
              setCart={setCart}
              usCurrency={usCurrency}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/signup">
            <SignupPage handleLogin={handleLogin}></SignupPage>
          </Route>
          <Route path="/signin">
            <SigninPage handleLogin={handleLogin}></SigninPage>
          </Route>
        </Switch>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default Main;
