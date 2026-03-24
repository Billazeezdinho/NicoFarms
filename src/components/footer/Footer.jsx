import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h3>NicoFarm</h3>
          <p>
            Sustainably produced poultry products serving communities across Ogun and Lagos State.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Location</h4>
          <p><strong>Farm:</strong><br />Igbessa, Ogun State, Nigeria</p>
          <p><strong>Office:</strong><br />7 Austin Obiador Street, Ago Palace Way, Okota, Isolo, Lagos</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nico AgriFarms Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
