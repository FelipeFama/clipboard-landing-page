import React from "react";
import bgHeaderMobile from "../../images/bg-header-mobile.png";
import bgHeaderDesktop from "../../images/bg-header-desktop.png";
import "./style.sass";

const PictureSection = () => {
  return (
    <div className="picture">
      <picture>
        <source srcSet={bgHeaderDesktop} media="(min-width: 768px)" />
        <img src={bgHeaderMobile} alt="header background" />
      </picture>
    </div>
  );
};

export default PictureSection;
