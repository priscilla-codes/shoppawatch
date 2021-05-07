import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainContent from '../components/MainContent';
import ProductDescription from '../components/ProductDescription';
import Loader from 'react-loader-spinner';
import api from '../api';

const ProductPage = ({
  addToCartHandler,
  getQuantity,
  increaseQuantity,
  decreaseQuantity,
  quantity,
  usCurrency
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${api.products}${id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product.description) {
    return (
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
    );
  }

  return (
    <>
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
                    addToCartHandler(product);
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
    </>
  );
};

export default ProductPage;
