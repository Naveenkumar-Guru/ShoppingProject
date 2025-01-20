import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Constant";
import "./HeadersPage.css";

const HeadersPage = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("jwt_token");
    sessionStorage.clear();
    navigate(routes.homepage);
  };

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <Link to={routes.homepage} className="nav-link">
              <li>Home</li>
            </Link>
            <Link to={routes.productpage} className="nav-link">
              <li>Products</li>
            </Link>
            <Link to={routes.cartpage} className="nav-link">
              <li>Cart</li>
            </Link>
            <Link to={routes.loginpage} className="nav-link">
              <li>Login</li>
            </Link>
          </ul>
          <button type="button" className="logout-desktop-btn" onClick={Logout}>
            Logout
          </button>
          <button type="button" className="logout-mobile-btn" onClick={Logout}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout icon"
              className="logout-icon"
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default HeadersPage;
