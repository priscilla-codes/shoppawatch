import { Link } from 'react-router-dom';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import { sortBy } from 'lodash';
import CheckoutItem from '../components/CheckoutItem';
import Loader from 'react-loader-spinner';

const CheckoutPage = ({ cart, usCurrency }) => {
  const cartItems = cart.cart_items;
  const orderedCartItems = sortBy(cartItems, item => item.created_at);

  if (!cartItems) {
    return (
      <>
        <div className="nav">
          <div className="centered-nav">
            <div className="left-nav">
              <div className="brand">
                <span className="brand-name">ShoppAWatch</span>
                <span className="brand-end-period"></span>
              </div>
            </div>
            <div className="right-nav">
              <div className="secure-icon">
                <i className="fas fa-lock-alt"></i>
              </div>
            </div>
          </div>
        </div>
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
      <div className="nav">
        <div className="centered-nav">
          <div className="left-nav">
            <Link to="/">
              <div className="brand">
                <span className="brand-name">ShoppAWatch</span>
                <span className="brand-end-period"></span>
              </div>
            </Link>
          </div>
          <div className="right-nav">
            <div className="secure-icon">
              <i className="fas fa-lock-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <MainContent page="checkout-page">
        <div class="checkout-card">
          <h1>Checkout</h1>
          <div class="order-summary">
            <h2>Order summary</h2>
            {orderedCartItems.map(item => (
              <CheckoutItem
                item={item}
                key={item.id}
                usCurrency={usCurrency}
              ></CheckoutItem>
            ))}
            <div class="total-amount__checkout">
              <span class="total-text__checkout">Total</span>
              <span class="total-price__checkout">
                {usCurrency.format(cart.total_price)}
              </span>
            </div>
            <hr />
            <div class="checkout-card-bottom">
              <h2>Payment method</h2>
              <div class="payment-method">
                <span>Method: PayPal</span>
              </div>
            </div>
            <div class="checkout-actions">
              <Link to="/cart">
                <div class="back-button">
                  <span>Back</span>
                </div>
              </Link>
              <div class="pay-button">
                <span>Pay {usCurrency.format(cart.total_price)}</span>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default CheckoutPage;
