import React from "react";
import Logo from "../../images/logo.svg";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles.sass";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <article>
          <img src={Logo} alt="logo" />
        </article>
        <ul>
          <li>
            <button>FAQs</button>
          </li>
          <li>
            <button>Contact Us</button>
          </li>
        </ul>

        <ul>
          <li>
            <button>Privacy Policy</button>
          </li>
          <li>
            <button>Press Kit</button>
          </li>
        </ul>

        <ul>
          <li>
            <button>Install Guide</button>
          </li>
        </ul>

        <ul className="social-media">
          <li>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
