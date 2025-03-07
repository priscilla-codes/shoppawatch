import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCart } from '../cartSlice';
import axios from 'axios';
import api from '../api';
import _, { debounce } from 'lodash';

const CartItem = ({ item, usCurrency }) => {
  const [newQuantity, setNewQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const updateItemQty = debounce(async itemQuantity => {
    const response = await axios.put(`${api.updateItem}`, {
      cart_item_id: item.id,
      new_quantity: itemQuantity
    });

    dispatch(setCart(response.data));
  }, 10);

  const removeItem = async () => {
    const response = await axios.delete(`${api.removeItem}`, {
      data: { cart_item_id: item.id }
    });
    dispatch(setCart(response.data));
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
        <Link to={`/products/${item.product_id}`}>
          <img src={item.main_image} alt={item.name} />
        </Link>
        <div className="name__cart">
          <Link to={`/products/${item.product_id}`} className="product-link">
            <span className="watch-name__cart">{item.name}</span>
          </Link>
        </div>
      </div>
      <div className="watch-details-right">
        <div className="watch-details mobile">
          <div className="name__cart">
            <Link to={`/products/${item.product_id}`} className="product-link">
              <span className="watch-name__cart">{item.name}</span>
            </Link>
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
