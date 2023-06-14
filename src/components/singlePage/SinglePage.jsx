import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanity";
import "./SinglePage.css";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

function SinglePage() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(
    () => {
      client
        .fetch('*[_type == "book"]') // Replace 'yourContentType' with your actual content type name
        .then((result) => setDataItem(result))
        .catch((error) => console.error(error));
    },
    [],
    [id]
  );

  const findUser = (id) => {
    const newItem = dataItem.find((itemdata) => itemdata._id === id);
    if (newItem) {
      return setItem([newItem]);
    }
  };

  useEffect(() => {
    findUser(id);
  }, [dataItem]);

  // const { title, coverImage } = item;
  // console.log(item);

  return (
    <>
      {item.map((item) => {
        {
          /* console.log(item); */
        }
        return (
          <main>
            <div key={item._id} className="container">
              <section className="mainContent details">
                <h1 className="title">{item.title}</h1>

                <img
                  className="coverImg"
                  src={urlFor(item.coverImage)}
                  alt=""
                />
                <div className="desctop">
                  <p> {item.description}</p>
                </div>
                <div className="desctop">
                  <p>{item.details}</p>
                </div>
                <div className="author">
                  <span>by</span>
                  <img src={urlFor(item.authorImg)} alt="" />
                  <p> {item.authorName} on</p>
                  <label>{item.time}</label>
                </div>

                <div className="social">
                  <div className="socBox">
                    <BsFacebook />
                  </div>
                  <div className="socBox">
                    <BsInstagram />
                  </div>
                  <div className="socBox">
                    <BsLinkedin />
                  </div>
                  <div className="socBox">
                    <BsYoutube />
                  </div>
                </div>
              </section>
            </div>
          </main>
        );
      })}
    </>
  );
}
export default SinglePage;
