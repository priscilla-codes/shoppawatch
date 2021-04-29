const CartItem = ({ item }) => {
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
            <span className="increment">
              <i className="far fa-minus"></i>
            </span>
            <input className="quantity-count-input" value="1" size="4" />
            <span className="decrement">
              <i className="far fa-plus"></i>
            </span>
          </div>
          <div className="bigger-screen price__cart">
            <span className="watch-price__cart">${item.total_price}</span>
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
