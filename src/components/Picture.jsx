import React from "react";
import bgHeaderMobile from "../images/bg-header-mobile.png";
import bgHeaderDesktop from "../images/bg-header-desktop.png";
import "../styles/components/picture.sass";

const Picture = () => {
  return (
    <div className="picture">
      <picture>
        <source srcSet={bgHeaderDesktop} media="(min-width: 768px)" />
        <img src={bgHeaderMobile} alt="header background" />
      </picture>
    </div>
  );
};

export default Picture;
