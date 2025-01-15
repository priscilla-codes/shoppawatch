import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <span className="copyright">
        Created by Priscilla Kalilombe. Copyright {currentYear} &#169; ShoppAWatch
        </span>
      </div>
    </div>
  );
};

export default Footer;
