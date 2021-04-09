import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import MainContent from '../components/MainContent';
import axios from 'axios';
import api from '../api';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(api.products);

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <MainContent>
        <div className="page-heading">
          <h2>Shop</h2>
        </div>
        <div className="watches-container">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </MainContent>
    </>
  );
};

export default HomePage;
