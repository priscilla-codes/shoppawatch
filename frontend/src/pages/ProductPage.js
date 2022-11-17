import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCartHandlerAsync,
  selectQuantity,
  setQuantity
} from '../cartSlice';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductDescription from '../components/ProductDescription';
import Loader from 'react-loader-spinner';
import api from '../api';

const ProductPage = ({ usCurrency }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const getQuantity = e => {
    dispatch(setQuantity(e.target.valueAsNumber || e.target.value));
  };

  const increaseQuantity = () => {
    if (quantity >= 1) {
      dispatch(setQuantity(quantity + 1));
    } else if (typeof quantity === 'string') {
      dispatch(setQuantity(1));
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(setQuantity(quantity - 1));
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${api.products}${id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    dispatch(setQuantity(1));
    window.scrollTo(0, 0);
  }, []);

  if (!product.description) {
    return (
      <>
        <Navbar />
        <MainContent>
          <div className="loader-spinner">
            <Loader
              type="TailSpin"
              color="Gray"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        </MainContent>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <MainContent page="product-page">
        <div className="single-product-layout">
          <div className="top-watch-block__single">
            <div className="leftside-single-block">
              {<img src={product.main_image} alt="" />}
            </div>
            <div className="rightside-single-block">
              <div className="top-rightside-single-block">
                <div className="name">
                  <span className="watch-name">{product.name}</span>
                </div>
                <div className="price">
                  <span className="watch-price">
                    <span className="full-price">
                      {usCurrency.format(product.price)}
                    </span>
                  </span>
                </div>
                <div className="description">
                  <p>{product.description.summary}</p>
                </div>
              </div>
              <hr />
              <div className="bottom-rightside-single-block">
                <div className="quantity__cart">
                  <span
                    className="decrement"
                    onClick={() => decreaseQuantity()}
                  >
                    <i className="far fa-minus"></i>
                  </span>
                  <input
                    type="number"
                    className="quantity-count-input"
                    value={quantity}
                    size="4"
                    onChange={e => getQuantity(e)}
                  />
                  <span
                    className="increment"
                    onClick={() => increaseQuantity()}
                  >
                    <i className="far fa-plus"></i>
                  </span>
                </div>
                <div
                  className="add-to-cart-button"
                  onClick={() => {
                    dispatch(addToCartHandlerAsync(product));
                  }}
                >
                  <span>Add To Cart</span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="bottom-watch-block__single">
            <div className="tabs">
              <div className="tabs-list">
                <span className="tabs-list-item selected">Description</span>
                <span className="tabs-list-item">Reviews(0)</span>
              </div>
              <div className="tab-content">
                <ProductDescription key={product.id} product={product} />
              </div>
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default ProductPage;
