import React, { useState } from "react";
import Head from "./Head";
import "./Header.scss";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culture">Tech</Link>
              </li>
              <li>
                <Link to="/politics">Social</Link>
              </li>
              <li>
                <Link to="/memes">Health</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/boxed">Food</Link>
              </li>
              <li>
                <Link to="/boxed">World</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
          <Outlet />
        </div>
      </header>
    </>
  );
}

export default Header;
