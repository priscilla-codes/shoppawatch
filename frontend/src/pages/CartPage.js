import CartItem from '../components/CartItem';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from 'react-loader-spinner';
import { sortBy } from 'lodash';
import SignupPage from './SignupPage';

const CartPage = ({ cart, setCart, usCurrency, handleLogout }) => {
  const cartItems = cart.cart_items;
  const orderedCartItems = sortBy(cartItems, item => item.created_at);

  if (cart && cartItems === undefined) {
    return (
      <>
        <Navbar cart={cart} handleLogout={handleLogout} setCart={setCart} />
        <MainContent page="cart">
          <div className="cart-heading">
            <h2>Cart</h2>
          </div>
          <div className="empty-cart">
            <p className="empty-cart-text">Your ShoppAWatch Cart is empty</p>
          </div>
        </MainContent>
        <Footer />
      </>
    );
  } else if (!cartItems) {
    return (
      <>
        <Navbar cart={cart} handleLogout={handleLogout} setCart={setCart} />
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
      <Navbar cart={cart} handleLogout={handleLogout} setCart={setCart} />
      <MainContent page="cart">
        <div className="cart-heading">
          <h2>Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-cart-text">Your ShoppAWatch Cart is empty</p>
          </div>
        ) : (
          <>
            <div className="watches-container__cart">
              {orderedCartItems.map(item => (
                <CartItem
                  item={item}
                  setCart={setCart}
                  key={item.id}
                  usCurrency={usCurrency}
                ></CartItem>
              ))}
            </div>
            <div className="checkout-wrapper">
              <div className="checkout">
                <div className="subtotal-amount">
                  <span className="subtotal-text">Subtotal</span>
                  <span className="subtotal-price">
                    {usCurrency.format(cart.total_price)}
                  </span>
                </div>
                <div className="delivery-amount">
                  <span className="delivery-text">Delivery</span>
                  <span className="delivery-price">Free</span>
                </div>
                <div className="total-amount">
                  <span className="total-text">Total</span>
                  <span className="total-price">
                    {usCurrency.format(cart.total_price)}
                  </span>
                </div>
                <div className="checkout-button">
                  <span>Checkout</span>
                </div>
              </div>
            </div>
          </>
        )}
      </MainContent>
      <Footer />
    </>
  );
};

export default CartPage;
