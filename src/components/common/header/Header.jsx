import React, { useState, useEffect } from "react";
import Head from "./Head";
import "./Header.scss";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0();

  const [navbar, setNavbar] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head />
      <header className={isScrolled ? "fixed" : ""}>
        <div className="container ">
          <nav>
            <ul
              className={navbar ? "navbar " : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li
                className={activeItem === "home" ? " active " : ""}
                onClick={() => handleItemClick("home")}
              >
                <Link to="/">Home</Link>
              </li>
              {isAuthenticated ? (
                <li
                  className={activeItem === "Tech" ? "active " : ""}
                  onClick={() => handleItemClick("Tech")}
                >
                  <Link to="/tech">Tech</Link>
                </li>
              ) : (
                <li
                  className={activeItem === "Tech" ? "active " : ""}
                  onClick={() => loginWithRedirect()}
                >
                  <Link to="/tech">Tech</Link>
                </li>
              )}
              {/* <button >Log In</button> */}

              <li
                className={activeItem === "social" ? "active " : ""}
                onClick={() => handleItemClick("social")}
              >
                <Link to="/social">Social</Link>
              </li>
              <li
                className={activeItem === "health" ? "active " : ""}
                onClick={() => handleItemClick("health")}
              >
                <Link to="/health">Health</Link>
              </li>
              <li
                className={activeItem === "sports" ? "active " : ""}
                onClick={() => handleItemClick("sports")}
              >
                <Link to="/sports">Sports</Link>
              </li>
              <li
                className={activeItem === "food" ? "active " : ""}
                onClick={() => handleItemClick("food")}
              >
                <Link to="/food">Food</Link>
              </li>
              <li
                className={activeItem === "world" ? "active " : ""}
                onClick={() => handleItemClick("world")}
              >
                <Link to="/world">World</Link>
              </li>
              <li
                className={activeItem === "reviews" ? "active " : ""}
                onClick={() => handleItemClick("reviews")}
              >
                <Link to="/reviews">Reviews</Link>
              </li>
              {/* {isAuthenticated && (
                <div className="auth">
                  <h2>hello {user.name}</h2>
                </div>
              )} */}
              {isAuthenticated ? (
                <li className="nav-item ">
                  <button
                    className="signbtn"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="nav-item ">
                  <button
                    className="signbtn"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </li>
              )}
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
