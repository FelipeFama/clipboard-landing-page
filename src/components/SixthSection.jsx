import React from "react";
import "../styles/components/sixthsection.sass";

const SixthSection = () => {
  return (
    <section className="section-six">
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <ul>
        <li>
          <button className="button-green">Download for iOS</button>
        </li>
        <li>
          <button className="button-blue">Download for Mac</button>
        </li>
      </ul>
    </section>
  );
};

export default SixthSection;
