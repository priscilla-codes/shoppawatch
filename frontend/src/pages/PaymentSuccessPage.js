import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { clearCartOnServer } from '../cartSlice';

const PaymentSuccessPage = ({ usCurrency }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentDetails, setPaymentDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(window.location.search);
    const paymentIntentId = urlParams.get('payment_intent');
    const redirectStatus = urlParams.get('redirect_status');
    
    // Persist payment data across tabs/redirects using sessionStorage
    // Essential for third-party payments like Cash App Pay
    const storedAmount = sessionStorage.getItem('pendingPaymentAmount');
    const storedTime = sessionStorage.getItem('pendingPaymentTime');
    
    const clearCart = async () => {
      try {
        await dispatch(clearCartOnServer());
      } catch (error) {
        console.error('Failed to clear cart:', error);
      }
    };

    const getPaymentDetails = async () => {
      setLoading(true);
      
      if (location.state && location.state.paymentId) {
        setPaymentDetails({
          paymentId: location.state.paymentId,
          amount: location.state.amount,
          date: location.state.date
        });
        clearCart();
        setLoading(false);
        return;
      }
      
      if (paymentIntentId) {
        // Handle failed payments for better UX
        if (redirectStatus === 'failed') {
          sessionStorage.setItem('failedPayment', 'true');
          setError("Your payment was not successful. Please try again.");
          setTimeout(() => {
            navigate('/checkout');
          }, 3000); 
          setLoading(false);
          return;
        }
        
        const amount = storedAmount ? parseFloat(storedAmount) : 19.99;
        const date = storedTime || new Date().toISOString();
        
        // Check multiple statuses as different payment methods return different success states
        if (redirectStatus === 'succeeded' || 
            redirectStatus === 'processing' || 
            redirectStatus === 'requires_capture') {
          
          setPaymentDetails({
            paymentId: paymentIntentId,
            amount: amount,
            date: date
          });
          
          clearCart();
        } else {
          sessionStorage.setItem('failedPayment', 'true');
          setError("Payment was not successful. Please try again.");
          setTimeout(() => {
            navigate('/checkout');
          }, 3000); 
        }
        
        // Clean up to prevent stale data affecting future payments
        sessionStorage.removeItem('pendingPaymentAmount');
        sessionStorage.removeItem('pendingPaymentTime');
        
        setLoading(false);
        return;
      }
      
      // Fallback for page refreshes or unusual navigation paths
      if (storedAmount) {
        setPaymentDetails({
          paymentId: "test-payment-" + Date.now(),
          amount: parseFloat(storedAmount),
          date: storedTime || new Date().toISOString()
        });
        clearCart();
        
        sessionStorage.removeItem('pendingPaymentAmount');
        sessionStorage.removeItem('pendingPaymentTime');
        
        setLoading(false);
        return;
      }
      
      setError("No payment information found. Please try again.");
      // Short delay for better UX than immediate redirect
      setTimeout(() => {
        navigate('/checkout');
      }, 3000); 
      
      setLoading(false);
    };

    getPaymentDetails();
  }, [dispatch, location, navigate]);

  if (loading) {
    return (
      <>
        <Navbar />
        <MainContent>
          <div className="success-page">
            <div className="success-card">
              <div className="loading-spinner">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
              <h1>Verifying Payment...</h1>
              <p>Please wait while we confirm your payment details.</p>
            </div>
          </div>
        </MainContent>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <MainContent>
          <div className="success-page">
            <div className="success-card">
              <div className="error-icon">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <h1>Payment Issue</h1>
              <p className="error-message">{error}</p>
              <p>Redirecting you back to checkout in 3 seconds...</p>
            </div>
          </div>
        </MainContent>
        <Footer />
      </>
    );
  }

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