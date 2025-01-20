import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const shopNow = () => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      navigate("/login");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="Home-container">
      <div className="Home-heading">
        <h1>Clothes That Get You Noticed</h1>
        <p className="Home-description">
          Fashion is part of the daily air, and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era,
          and we are in a revolution. Your fashion makes you be seen and heard
          the way you are. So, celebrate the season's new and exciting fashion
          in your own way.
        </p>
        <button
          className="home-shop-Now-button"
          type="button"
          onClick={shopNow}
        >
          Shop Now
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div>
    </div>
  );
};

export default HomePage;
