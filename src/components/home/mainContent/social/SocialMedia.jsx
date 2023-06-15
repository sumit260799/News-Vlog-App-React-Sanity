import React, { useState, useEffect } from "react";
import "./SocialMedia.css";
import { client, urlFor } from "../../../../lib/sanity";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { Link } from "react-router-dom";
import { BsCalendarCheck, BsPeople } from "react-icons/bs";
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
function SocialMedia() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    client
      .fetch('*[_type == "socialpost"]') // Replace 'yourContentType' with your actual content type name
      .then((result) => setItems(result))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,

          //   infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="social">
        <Heading title="Social News" />
        <div className="content">
          <Slider {...settings}>
            {items.map((val) => {
              const {
                _id,
                author,
                title,
                category,
                description,
                date,
                socialImage,
              } = val;
              return (
                <Link key={_id} to={`/SingleSocial/${_id}`}>
                  <div className="items">
                    <div className="box shadow flexSB">
                      <div className="images">
                        <div className="img">
                          <img src={urlFor(socialImage)} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{category}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{title.slice(0, 40)}...</h1>

                        <p className="desc">{description.slice(0, 250)}...</p>
                        <p className="icons">
                          <BsPeople className="peopleicon" /> {author}{" "}
                          <BsCalendarCheck className="peopleicon" />
                          <span className="date">{date}</span>
                        </p>
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

export default SocialMedia;
