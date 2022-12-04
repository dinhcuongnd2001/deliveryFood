import React from "react";
import HeaderComponent from "../header/Header";
import FooterComponent from "../footer/Footer";
import ContentComponent from "../content/Content";
import { BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default Main;
