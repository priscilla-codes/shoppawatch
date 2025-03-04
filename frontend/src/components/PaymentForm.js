import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../cartSlice';

const PaymentForm = forwardRef(({ amount, onProcessingChange }, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setPaymentError(null);
  }, [amount]);

  // Stores payment amount in sessionStorage before potential redirects
  // Ensures the amount can be recovered after returning from third-party payment flows
  useEffect(() => {
    if (amount) {
      sessionStorage.setItem('pendingPaymentAmount', amount.toString());
      sessionStorage.setItem('pendingPaymentTime', new Date().toISOString());
    }
  }, [amount]);

  const handlePayment = async () => {
    if (isProcessing) {
      return;
    }
    
    setIsProcessing(true);
    setPaymentError(null);
    onProcessingChange(true);

    if (!stripe || !elements) {
      console.error("Stripe.js hasn't loaded yet");
      setPaymentError("Payment processing unavailable. Please try again later.");
      setIsProcessing(false);
      onProcessingChange(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        console.error("Payment error:", error);
        setPaymentError(error.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        dispatch(clearCart());
        
        window.scrollTo(0, 0);
        
        navigate('/payment-success', { 
          state: { 
            paymentId: paymentIntent.id,
            amount: amount,
            date: new Date().toISOString()
          } 
        });
      } else if (paymentIntent && paymentIntent.next_action && paymentIntent.next_action.type === 'redirect_to_url') {
        // For Cash App Pay and other redirect-based payment methods
        window.location.href = paymentIntent.next_action.redirect_to_url.url;
      } else if (paymentIntent && paymentIntent.status === 'requires_payment_method') {
        setPaymentError("The payment was declined. Please try again with a different payment method.");
      } else {
        console.error("Unexpected payment status:", paymentIntent?.status);
        setPaymentError("Something went wrong with your payment. Please try again.");
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      setPaymentError(error.message || 'Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
      onProcessingChange(false);
    }
  };

  // Expose handlePayment method to parent component
  useImperativeHandle(ref, () => ({
    handlePayment
  }), [stripe, elements, amount, isProcessing, navigate]);

  return (
    <div className="payment-form">
      <div className="demo-notice">
        💳 <strong>Test Card Details:</strong><br />
        • Number: 4242 4242 4242 4242<br />
        • Expiry: Any future date (MM/YY)<br />
        • CVC: Any 3 digits
      </div>

      <PaymentElement 
        onReady={() => setIsReady(true)}
        options={{
          layout: {
            type: 'tabs',
            defaultCollapsed: false,
          },
          cashapp: {
            presentationMode: 'iframe'
          }
        }}
      />

      {paymentError && <div className="error-message">{paymentError}</div>}

      <div className="card-status">
        {isReady ? 
          <div className="card-complete">✓ Payment form ready</div> : 
          <div className="card-incomplete">Loading payment form...</div>
        }
      </div>
    </div>
  );
});

export default PaymentForm;