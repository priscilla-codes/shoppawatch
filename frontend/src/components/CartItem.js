import axios from 'axios';
import api from '../api';

const CartItem = ({ item, setCart, usCurrency }) => {
  const updateItemQty = async itemQuantity => {
    const response = await axios.put(`${api.updateItem}`, {
      cart_item_id: item.id,
      new_quantity: itemQuantity
    });

    setCart(response.data);
  };

  return (
    <>
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
              onClick={() => updateItemQty(item.quantity - 1)}
            >
              <i className="far fa-minus"></i>
            </span>
            <input
              className="quantity-count-input"
              value={item.quantity}
              size="4"
              onChange={e => updateItemQty(Number(e.target.value))}
            />
            <span
              className="increment"
              onClick={() => updateItemQty(item.quantity + 1)}
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
        <div className="delete-watch">
          <span>
            <i className="fal fa-times mobile"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
