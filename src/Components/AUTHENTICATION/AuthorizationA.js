import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Cartpage from "./Cart/Cartpage";
import Loginpage from "./LoginForms/Loginpage";
import ProductsPage from "./Products/ProductsPage";
import HeadersPage from "./Header/HeadersPage";
import { routes } from "./Constant";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path={routes.homepage}
              element={
                <>
                  <HeadersPage />
                  <div style={{ height: "100px" }}></div>
                  <HomePage />
                </>
              }
            />
            <Route
              path={routes.productpage}
              element={
                <>
                  <HeadersPage />
                  <div style={{ height: "38px" }}></div>
                  <ProductsPage />
                </>
              }
            />
            <Route
              path={routes.cartpage}
              element={
                <>
                  <HeadersPage />
                  <div style={{ height: "100px" }}></div>
                  <Cartpage />
                </>
              }
            />
            <Route
              path={routes.loginpage}
              element={
                <>
                  <HeadersPage />
                  <Loginpage />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
