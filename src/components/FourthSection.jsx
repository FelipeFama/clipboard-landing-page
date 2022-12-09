import React from "react";
import blacklist from "../images/icon-blacklist.svg";
import icontext from "../images/icon-text.svg";
import iconpreview from "../images/icon-preview.svg";
import "../styles/components/fourthsection.sass";

const FourthSection = () => {
  return (
    <section className="section-four">
      <article>
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
      </article>
      <div className="cards">
        <article>
          <img src={blacklist} alt="list icon" />
          <h3>Create blacklists</h3>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </article>
        <article>
          <img src={icontext} alt="letter icon" />
          <h3>Plain text snippets</h3>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </article>
        <article>
          <img src={iconpreview} alt="eye icon" />
          <h3>Sneak preview</h3>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FourthSection;
