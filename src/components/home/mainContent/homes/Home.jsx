import React from "react";
import Popular from "../popular/Popular";
import "./Home.css";
import Side from "../../sideContent/side/side";
import FoodPost from "../FoodPost/FoodPost";
import SocialMedia from "../social/SocialMedia";
function Home() {
  return (
    <article className="main">
      <div className="container">
        <section className="mainContent">
          <Popular />
          <FoodPost />
          <SocialMedia />
        </section>

        <section className="sideContent">
          <Side />
        </section>
      </div>
    </article>
  );
}

export default Home;
