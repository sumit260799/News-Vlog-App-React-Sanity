import React, { useState, useEffect } from "react";
import "./SideSocial.css";
import { client, urlFor } from "../../../../lib/sanity.js";
import Heading from "../../../common/heading/Heading.jsx";
import { Link } from "react-router-dom";
function SideSocial() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    client
      .fetch('*[_type == "socialpost"]') // Replace 'yourContentType' with your actual content type name
      .then((result) => setItems(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Heading title="Social post" />
      <section className="spost">
        {items.map((val) => {
          const { _id, title, socialImage, date } = val;
          return (
            <Link key={_id} to={`/SingleSocial/${_id}`}>
              <div className="box flexSB">
                <div className="img">
                  <img src={urlFor(socialImage)} alt="" />
                </div>
                <div className="text">
                  <h1 className="title">{title.slice(0, 35)}...</h1>
                  <span>{date}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default SideSocial;
