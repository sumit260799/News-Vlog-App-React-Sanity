import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "./sumit1.jpg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            {/* <h3>LABELS</h3> */}
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/pricing">pricing</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>2023 ©all rights reserved</p>
          <p className="logoimg">
            made with by ❤️ <img src={logo} alt="sumit" /> SumitDas
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
