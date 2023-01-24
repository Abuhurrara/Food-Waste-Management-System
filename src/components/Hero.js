import React from "react";
import "../css/hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <h3>Give hope for homeless</h3>
        <h1>Helping each other</h1>
        <h1>can make world better</h1>
        <h4>
          We Seek Out World Changers And Difference Makers Around The <br />
          Globe,And Equip Them To Fulfill Their Unique Purpose.
        </h4>
        <span className="hero-buttons">
          <button className="donate-now">Donate Now</button>
          <button className="know-us">Know about us</button>
        </span>
      </div>
    </>
  );
};

export { Hero };
