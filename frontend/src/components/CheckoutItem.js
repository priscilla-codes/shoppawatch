import React from 'react';

const CheckoutItem = ({ item, usCurrency }) => {
  return (
    <div class="watch-order-details">
      <div class="watch-order-details-left">
        <div class="watch-name__checkout">{item.name}</div>
        <div class="quantity__checkout">
          <span class="quantity-text"></span>Quantity:
          <span class="quantity-count__checkout">{item.quantity}</span>
        </div>
      </div>
      <div class="price__checkout">
        <span class="watch-price__checkout">
          {usCurrency.format(item.price)}{' '}
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
