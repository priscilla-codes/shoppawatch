import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api';
import _, { debounce } from 'lodash';

const CartItem = ({ item, setCart, usCurrency }) => {
  const [newQuantity, setNewQuantity] = useState(item.quantity);
  const updateItemQty = debounce(async itemQuantity => {
    const response = await axios.put(`${api.updateItem}`, {
      cart_item_id: item.id,
      new_quantity: itemQuantity
    });

    setCart(response.data);
  }, 10);

  const removeItem = async () => {
    const response = await axios.delete(`${api.removeItem}`, {
      data: { cart_item_id: item.id }
    });
    setCart(response.data);
  };

  const increaseQuantity = quantity => {
    setNewQuantity(Number(quantity) + 1);
  };

  const decreaseQuantity = quantity => {
    if (quantity > 1) {
      setNewQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    updateItemQty(newQuantity);
  }, [newQuantity]);

  return (
    <div className="watch-block__cart">
      <div className="watch-details-left">
        <img src={item.main_image} alt="" />
        <div className="name__cart">
          <span className="watch-name__cart">{item.name}</span>
        </div>
      </div>
      <div className="watch-details-right">
        <div className="watch-details mobile">
          <div className="name__cart">
            <span className="watch-name__cart">{item.name}</span>
          </div>
          <div className="price__cart">
            <span className="watch-price__cart">${item.total_price}</span>
          </div>
        </div>
        <div className="quantity__cart">
          <span
            className="decrement"
            onClick={() => updateItemQty(decreaseQuantity(newQuantity))}
          >
            <i className="far fa-minus"></i>
          </span>
          <input
            type="number"
            className="quantity-count-input"
            value={newQuantity}
            size="4"
            min="1"
            onChange={e => setNewQuantity(e.target.value)}
          />
          <span
            className="increment"
            onClick={() => updateItemQty(increaseQuantity(newQuantity))}
          >
            <i className="far fa-plus"></i>
          </span>
        </div>
        <div className="bigger-screen price__cart">
          <span className="watch-price__cart">
            {usCurrency.format(item.total_price)}
          </span>
        </div>
      </div>
      <div className="delete-watch" onClick={() => removeItem()}>
        <span>
          <i className="fal fa-times mobile"></i>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
