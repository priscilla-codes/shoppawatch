import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutItem = ({ item, usCurrency }) => {
  return (
    <div className="watch-order-details">
      <div className="watch-order-details-left">
        <Link to={`/products/${item.product_id}`}>
          <img 
            src={item.main_image} 
            alt={item.name}
            className="watch-image__checkout"
          />
        </Link>
        <div className="watch-details__checkout">
          <div className="watch-name__checkout">
            <Link to={`/products/${item.product_id}`} className="product-link">
              {item.name}
            </Link>
          </div>
          <div className="quantity__checkout">
            <span className="quantity-text">Quantity:</span>
            <span className="quantity-count__checkout">{item.quantity}</span>
          </div>
        </div>
      </div>
      <div className="price__checkout">
        <span className="watch-price__checkout">
          {usCurrency.format(item.price)}{' '}
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
