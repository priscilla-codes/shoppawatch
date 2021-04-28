import CartItem from '../components/CartItem';
import MainContent from '../components/MainContent';
import Loader from 'react-loader-spinner';

const CartPage = ({ cart }) => {
  if (!cart.cart_items) {
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
      <MainContent page="cart">
        <div class="cart-heading">
          <h2>Cart</h2>
        </div>
        <div class="watches-container__cart">
          {cart.cart_items.map(item => (
            <CartItem item={item}></CartItem>
          ))}
        </div>
        <div class="checkout-wrapper">
          <div class="checkout">
            <div class="subtotal-amount">
              <span class="subtotal-text">Subtotal</span>
              <span class="subtotal-price">${cart.total_price}</span>
            </div>
            <div class="delivery-amount">
              <span class="delivery-text">Delivery</span>
              <span class="delivery-price">Free</span>
            </div>
            <div class="total-amount">
              <span class="total-text">Total</span>
              <span class="total-price">${cart.total_price}</span>
            </div>
            <div class="checkout-button">
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default CartPage;
