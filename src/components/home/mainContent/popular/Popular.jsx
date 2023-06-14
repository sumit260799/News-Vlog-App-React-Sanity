import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Popular.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Heading from "../../../common/heading/Heading";
import { client, urlFor } from "../../../../lib/sanity";
// carousal
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
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
function Popular() {
  // fetch sanity data
  const [items, setItems] = useState([]);
  useEffect(() => {
    client
      .fetch('*[_type == "popular"]') // Replace 'yourContentType' with your actual content type name
      .then((result) => setItems(result))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
  };
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {items.map((val) => {
              return (
                <Link
                  key={val._id}
                  className="box"
                  to={`/PopularPage/${val._id}`}
                >
                  <div className="items">
                    <div className="box shadow">
                      <div className="images row">
                        <div className="img">
                          <img src={urlFor(val.coverImage)} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className="text row">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                        <div className="date">
                          <i class="fas fa-calendar-days"></i>
                          <label>{val.date}</label>
                        </div>
                        <div className="comment">
                          <i class="fas fa-comments"></i>
                          <label>{val.comments}</label>
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

export default Popular;
