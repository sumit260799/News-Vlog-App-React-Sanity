import React, { useEffect } from "react";
import Heading from "../../common/heading/Heading";
import { client, urlFor } from "../../../lib/sanity";
import { useState } from "react";
import "./Discover.scss";
function Discover() {
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "discover"]') // Replace 'yourContentType' with your actual content type name
      .then((result) => setDiscover(result))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <section className="discover">
        <div className="container">
          <Heading title="Discover" />
          <div className="content">
            {discover.map((val) => {
              return (
                <div key={val._id} className="box">
                  <div className="img">
                    <img src={urlFor(val.coverImage)} alt="" />
                  </div>
                  <h1 className="title">{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;
