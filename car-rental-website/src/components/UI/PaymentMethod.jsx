

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import React, { useEffect } from 'react';
const PaymentMethod = () => {
  


  useEffect(() => {
    // Check if the Razorpay script has already been loaded
    if (!document.getElementById('razorpay-embed-btn-js')) {
      const script = document.createElement('script');
      script.defer = true;
      script.id = 'razorpay-embed-btn-js';
      script.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';

      script.onload = () => {
        // Initialize Razorpay if the script has loaded
        const rzp = window['_rzp_'];
        rzp && rzp.init && rzp.init();
      };

      // Append the script to the document body
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_Mk6KFlQswbw7xl/view" data-text="Pay Now" data-color="#07A8ED" data-size="large">
      {/* Razorpay script will be loaded dynamically */}
    </div>
  );
};


export default PaymentMethod;
