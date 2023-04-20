import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.youtube.com/"><FaYoutube/></a>
        <a href="https://in.search.yahoo.com/search?ei=UTF-8&fr=crmas&p=instagram"><FaInstagram /></a>
        <a href="https://www.facebook.com/"><FaFacebook /></a>
      </div>
      <div className="copyright">
        &copy; 2023 Quote Machine
      </div>
    </footer>
  );
}

export default Footer;