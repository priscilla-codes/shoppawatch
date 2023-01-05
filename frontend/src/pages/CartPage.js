import { useSelector } from 'react-redux';
import { selectCart } from '../cartSlice';
import CartItem from '../components/CartItem';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from 'react-loader-spinner';
import { sortBy } from 'lodash';
import { Link } from 'react-router-dom';
import { LOGGED_IN, selectLoggedInStatus } from '../authSlice';

const CartPage = ({ usCurrency }) => {
  const cart = useSelector(selectCart);
  const loggedInStatus = useSelector(selectLoggedInStatus);
  const cartItems = cart.cart_items;
  const orderedCartItems = sortBy(cartItems, item => item.created_at);

  if (!cartItems) {
    return (
      <>
        <Navbar />
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
      <Navbar />
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
                {loggedInStatus === LOGGED_IN ? (
                  <Link to="/checkout">
                    <div className="checkout-button">
                      <span>Checkout</span>
                    </div>
                  </Link>
                ) : (
                  <Link to="/signin">
                    <div className="checkout-button">
                      <span>Checkout</span>
                    </div>
                  </Link>
                )}
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
