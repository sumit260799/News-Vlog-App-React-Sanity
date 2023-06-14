import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../../lib/sanity";
const Card = ({ _id, coverImage, category, title, authorName, time }) => {
  const id = _id;
  // console.log(coverImage);
  return (
    <Link className="box" to={`/SinglePage/${id}`}>
      <div>
        <div className="img">
          <img src={urlFor(coverImage.asset)} alt="" />
        </div>
        <span className="category">{category}</span>
        <div className="text">
          <div className="subText">
            {/*<h1 className='titleBg'>{title}</h1>*/}
            <h1 className="titleBg">{title}</h1>
            <div className="author flex">
              <span className="timecolor">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
