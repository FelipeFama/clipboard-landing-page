import React from "react";
import Logo from "../images/logo.svg";
import "../styles/components/showsection.sass";

const ShowSection = () => {
  return (
    <section className="showcase">
      <article>
        <img src={Logo} alt="logo" />
      </article>
      <article>
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <ul>
          <li>
            <button className="button-green">Download for iOS</button>
          </li>
          <li>
            <button className="button-blue">Download for Mac</button>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ShowSection;
