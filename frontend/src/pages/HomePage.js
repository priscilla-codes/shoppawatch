import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import api from '../api';

const HomePage = ({
  addToCartHandler,
  setQuantity,
  usCurrency,
  cart,
  loggedInStatus
}) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(api.products);

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    setQuantity(1);
  }, [setQuantity]);

  return (
    <>
      <Navbar cart={cart} />
      <MainContent>
        <div className="page-heading">
          <h2>Shop: {loggedInStatus}</h2>
        </div>
        <div className="watches-container">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              addToCartHandler={addToCartHandler}
              usCurrency={usCurrency}
            />
          ))}
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default HomePage;
