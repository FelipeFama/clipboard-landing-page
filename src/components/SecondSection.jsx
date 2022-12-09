import React from "react";
import computer from "../images/image-computer.png";
import "../styles/components/secondsection.sass";

const SecondSection = () => {
  return (
    <section className="section-two">
      <article>
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </article>
      <div className="computer">
        <article>
          <img src={computer} alt="computer screen" />
        </article>

        <article>
          <div>
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div>
            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SecondSection;
