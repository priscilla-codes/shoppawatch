import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import api from '../api';
import { selectQuantity } from '../cartSlice';

const HomePage = ({ usCurrency }) => {
  const [products, setProducts] = useState([]);
  const quantity = useSelector(selectQuantity);

  const fetchProducts = async () => {
    const { data } = await axios.get(api.products);

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
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
