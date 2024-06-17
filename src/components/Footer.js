import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Work In Progress</p>
        <p>&copy; {new Date().getFullYear()} Geoffrey Budiman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;