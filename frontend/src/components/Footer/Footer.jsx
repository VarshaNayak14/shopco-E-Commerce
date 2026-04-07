import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpSquare } from "react-icons/bs";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Address / Contact */}
        <div className="footer-column">
          <h4>Our Address</h4>
          <p>📍 123 Street, New York, USA</p>
          <p>📞 +012 345 67890</p>
          <p>✉ info@example.com</p>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#terms">Terms of use</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest updates and offers.</p>
          <div className="newsletter">
            <input type="email" placeholder="Email goes here" />
            <button>subscribe</button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Your Site Name, All Right Reserved. Designed By HTML Codex</p>
        <BsArrowUpSquare className="scroll-top" onClick={scrollToTop} />
      </div>
    </footer>
  );
}

export default Footer;