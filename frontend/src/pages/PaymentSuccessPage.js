import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { clearCartOnServer } from '../cartSlice';
import axios from 'axios';

const PaymentSuccessPage = ({ usCurrency }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [paymentDetails, setPaymentDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const clearCart = async () => {
      try {
        await dispatch(clearCartOnServer());
      } catch (error) {
        console.error('Failed to clear cart:', error);
      }
    };

    const getPaymentDetails = async () => {
      if (location.state && location.state.paymentId) {
        setPaymentDetails({
          paymentId: location.state.paymentId,
          amount: location.state.amount,
          date: location.state.date
        });
      } else {
        try {
          const response = await axios.get('/api/v1/payments/latest', {
            withCredentials: true
          });
          
          if (response.data && response.data.payment) {
            setPaymentDetails({
              paymentId: response.data.payment.id,
              amount: response.data.payment.amount / 100, // Convert from cents
              date: response.data.payment.created
            });
          }
        } catch (error) {
          console.error('Error fetching payment details:', error);
        }
      }
    };

    clearCart();
    getPaymentDetails();
  }, [dispatch, location]);

  return (
    <>
      <Navbar />
      <MainContent>
        <div className="success-page">
          <div className="success-card">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            
            <h1>Payment Successful!</h1>
            <p className="success-message">Thank you for your purchase. Your order has been processed successfully.</p>
            
            {paymentDetails.amount && (
              <div className="payment-details">
                <h2>Order Details</h2>
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value">{usCurrency.format(paymentDetails.amount)}</span>
                </div>
                {paymentDetails.date && (
                  <div className="detail-row">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">
                      {new Date(paymentDetails.date).toLocaleDateString()} 
                      {new Date(paymentDetails.date).toLocaleTimeString()}
                    </span>
                  </div>
                )}
                {paymentDetails.paymentId && (
                  <div className="detail-row">
                    <span className="detail-label">Payment ID:</span>
                    <span className="detail-value">{paymentDetails.paymentId}</span>
                  </div>
                )}
              </div>
            )}
            
            <div className="success-actions">
              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default PaymentSuccessPage; 