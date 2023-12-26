import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
 <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Simply Private Investing</h2>
          <div className="about-info">
            <span>EquiDeFi® Ltd.</span>
            <span>237 W 37th Street</span>
            <span>Suite 602</span>
            <span>New York, NY 10018</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Links</h2>
          <div className="link">
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Invest</Link>
              </li>
              <li>
                <Link>Raise Capital</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
            </ul>
          </div>

          <div className="resources">
            <h2>Resources</h2>
           <div className="link">
           <li> <Link>Learn</Link></li>
           <li> <Link>MarketPlace</Link></li>
           </div>
          </div>
        </div>

        <div className="footer-section contact">
          <h2>Get In Touch</h2>
          <div className="contact-info">
             <li><Link>Contact Us</Link></li>
            <li><Link>Terms Of Service</Link></li>
            <li><Link>Private Policy</Link></li>
          </div>
        </div>
      </div>
      </footer>
  );
};

export default Footer;
