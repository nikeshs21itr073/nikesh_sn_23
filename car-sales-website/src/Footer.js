// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="black-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">Dream Car Motors</a>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Connect with Us</h3>
            <div className="social-icons">
            <div className="footer-social">
        <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=your-phone-number" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp-square"></i>
        </a>
      </div>
            </div>
          </div>
        </div>
        <div className="footer-info" id="last">
          <h3>Contact Information</h3>
          <address>
            123 Main Street<br />
            Erode, TamilNadu, 638052<br />
            Phone: (123) 456-7890<br />
            Email: info@carsales.com
          </address>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
