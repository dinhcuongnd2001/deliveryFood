import React from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import ContentComponent from "./Content";
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
