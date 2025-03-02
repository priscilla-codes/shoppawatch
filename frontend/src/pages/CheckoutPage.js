import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../cartSlice';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import { sortBy } from 'lodash';
import CheckoutItem from '../components/CheckoutItem';
import Loader from 'react-loader-spinner';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import PaymentForm from '../components/PaymentForm';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = ({ usCurrency }) => {
  const cart = useSelector(selectCart);
  const cartItems = cart.cart_items;
  const orderedCartItems = sortBy(cartItems, item => item.created_at);
  const [isProcessing, setIsProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const paymentFormRef = useRef(null);

  useEffect(() => {
    if (cart && cart.total_price) {
      createPaymentIntent();
    }
  }, [cart]);

  const createPaymentIntent = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/v1/create_payment_intent', {
        amount: cart.total_price * 100
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!cartItems || loading) {
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

  const handlePayButtonClick = () => {
    if (paymentFormRef.current && !isProcessing) {
      paymentFormRef.current.handlePayment();
    }
  };

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

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
        <div className="checkout-card">
          <h1>Checkout</h1>
          <div className="order-summary">
            <h2>Order summary</h2>
            {orderedCartItems.map(item => (
              <CheckoutItem
                item={item}
                key={item.id}
                usCurrency={usCurrency}
              ></CheckoutItem>
            ))}
            <div className="total-amount__checkout">
              <span className="total-text__checkout">Total</span>
              <span className="total-price__checkout">
                {usCurrency.format(cart.total_price)}
              </span>
            </div>
            <hr />
            <div className="checkout-card-bottom">
              <h2>Payment method</h2>
              <div className="payment-method">
                <span>Method: Credit Card</span>
              </div>
              {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                  <PaymentForm 
                    amount={cart.total_price} 
                    usCurrency={usCurrency}
                    onProcessingChange={setIsProcessing}
                    ref={paymentFormRef}
                  />
                </Elements>
              )}
            </div>
            <div className="checkout-actions">
              <Link to="/cart">
                <div className="back-button">
                  <span>Back</span>
                </div>
              </Link>
              <div 
                className={`pay-button ${isProcessing ? 'processing' : ''}`}
                onClick={handlePayButtonClick}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="spinner"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Pay {usCurrency.format(cart.total_price)}</span>
                )}
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
