import React, { useState, useEffect } from "react";
import "./hero.css";
import Card from "./Card";
import { client } from "../../../lib/sanity";
const Hero = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    client
      .fetch('*[_type == "book"]') // Replace 'yourContentType' with your actual content type name
      .then((result) => setItems(result))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className="hero">
      <div className="container">
        {items.map((item) => {
          {
            /* console.log(item); */
          }
          return <Card key={item._id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Hero;
