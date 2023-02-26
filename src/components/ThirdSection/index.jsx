import React from "react";
import devices from "../../images/image-devices.png";
import "./styles.sass";

const ThirdSection = () => {
  return (
    <section className="section-three">
      <article>
        <h2>Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={devices} alt="mobile devices" />
      </article>
    </section>
  );
};

export default ThirdSection;
