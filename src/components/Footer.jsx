import React from "react";
import Logo from "../images/logo.svg";
import facebookicon from "../images/icon-facebook.svg";
import instagramicon from "../images/icon-instagram.svg";
import twittericon from "../images/icon-twitter.svg";
import "../styles/components/footer.sass";

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
            <img src={facebookicon} alt="facebook icon" />
          </li>
          <li>
            <img src={instagramicon} alt="instagram icon" />
          </li>
          <li>
            <img src={twittericon} alt="twitter icon" />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
