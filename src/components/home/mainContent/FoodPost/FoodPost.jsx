import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { client, urlFor } from "../../../../lib/sanity";
import { Link } from "react-router-dom";
import "./FoodPost.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        color: "#000",
      }}
      onClick={onClick}
    />
  );
}
function FoodPost() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    client
      .fetch('*[_type == "foodpost"]') // Replace 'yourContentType' with your actual content type name
      .then((result) => setItems(result))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="popularPost">
        <Heading title="Food Posts" />
        <div className="content">
          <Slider {...settings}>
            {items.map((item) => {
              const { _id, title, category, description, image, date } = item;
              return (
                <Link key={_id} to={`/SingleFood/${_id}`}>
                  <div className="items">
                    <div className="box shadow">
                      <div className="images">
                        <div className="img">
                          <img src={urlFor(image)} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{category}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{title.slice(0, 40)}...</h1>
                        <div className="date">
                          <i class="fas fa-calendar-days"></i>
                          <label>{date}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default FoodPost;
