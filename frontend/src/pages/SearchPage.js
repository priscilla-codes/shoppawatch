import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import api from '../api';

const SearchPage = ({ usCurrency }) => {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(`${api.search}`, {
      params: { query: keyword }
    });

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [keyword]);

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

export default SearchPage;
