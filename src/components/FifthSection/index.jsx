import React from "react";
import logogoogle from "../../images/logo-google.png";
import logoibm from "../../images/logo-ibm.png";
import logomicrosoft from "../../images/logo-microsoft.png";
import logohp from "../../images/logo-hp.png";
import logovectorgraphics from "../../images/logo-vector-graphics.png";
import "./styles.sass";

const FifthSecion = () => {
  return (
    <section className="section-five">
      <ul>
        <li>
          <img src={logogoogle} alt="logo google" />
        </li>
        <li>
          <img src={logoibm} alt="logo ibm" />
        </li>
        <li>
          <img src={logomicrosoft} alt="logo microsoft" />
        </li>
        <li>
          <img src={logohp} alt="logo hp" />
        </li>
        <li>
          <img src={logovectorgraphics} alt="logo vector graphics" />
        </li>
      </ul>
    </section>
  );
};

export default FifthSecion;
