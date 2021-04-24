import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './api';

// Components
import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function Main() {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = async product => {
    const response = await axios.post(`${api.addItem}`, {
      product_id: product.id,
      quantity
    });

    setCart(response.data);
  };

  console.log(cart);

  const fetchCart = async () => {
    const response = await axios.get(api.cart);

    setCart(response.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <BrowserRouter>
      <MainWrapper>
        <Navbar cart={cart} />
        <Switch>
          <Route path="/" exact>
            <HomePage
              addToCartHandler={addToCartHandler}
              setQuantity={setQuantity}
              quantity={quantity}
            />
          </Route>
          <Route path="/products/:id">
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default Main;
