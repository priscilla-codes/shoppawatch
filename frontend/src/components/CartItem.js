const CartItem = ({ item }) => {
  return (
    <>
      <div class="watch-block__cart">
        <div class="watch-details-left">
          <img src={item.main_image} alt="" />
          <div class="name__cart">
            <span class="watch-name__cart">{item.name}</span>
          </div>
        </div>
        <div class="watch-details-right">
          <div class="watch-details mobile">
            <div class="name__cart">
              <span class="watch-name__cart">{item.name}</span>
            </div>
            <div class="price__cart">
              <span class="watch-price__cart">${item.total_price}</span>
            </div>
          </div>
          <div class="quantity__cart">
            <span class="increment">
              <i class="far fa-minus"></i>
            </span>
            <input class="quantity-count-input" value="1" size="4" />
            <span class="decrement">
              <i class="far fa-plus"></i>
            </span>
          </div>
          <div class="bigger-screen price__cart">
            <span class="watch-price__cart">${item.total_price}</span>
          </div>
        </div>
        <div class="delete-watch">
          <span>
            <i class="fal fa-times mobile"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
