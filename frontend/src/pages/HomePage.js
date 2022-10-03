import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import api from '../api';
import { setQuantity } from '../cartSlice';

const HomePage = ({ usCurrency, handleLogout, loggedInStatus }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const { data } = await axios.get(api.products);

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    dispatch(setQuantity());
  }, []);

  return (
    <>
      <Navbar handleLogout={handleLogout} loggedInStatus={loggedInStatus} />
      <MainContent>
        <div className="page-heading">
          <h2>Shop</h2>
        </div>
        <div className="watches-container">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
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
