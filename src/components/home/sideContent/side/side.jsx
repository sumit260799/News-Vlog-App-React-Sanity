import React from "react";
import SocialMedia from "../social/Social";
import Heading from "../../../common/heading/Heading";
import SideSocial from "../socialsidepost/SideSocial";
import "./side.scss";
function Side() {
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <section className="banner">
        <img
          className="advertisement"
          src="https://i.pinimg.com/736x/d3/ab/73/d3ab73657ea452a0fc713e1bfdb71e51--ad-design-print-design.jpg"
          alt=""
        />
      </section>
      <SideSocial />
    </>
  );
}

export default Side;
