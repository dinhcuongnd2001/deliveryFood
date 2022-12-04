import React from "react";
import HeaderComponent from "../header/Header";
import FooterComponent from "../footer/Footer";
import ContentComponent from "../content/Content";
import { BrowserRouter } from "react-router-dom";
import CartSidebar from "../../components/cartSidebar/CartSidebar";
import { useState } from "react";
function Main() {
  const [invisibale, setInvisibale] = useState(false);
  return (
    <BrowserRouter>
      <HeaderComponent invisibale={invisibale} setInvisibale={setInvisibale} />
      <ContentComponent />
      <FooterComponent />
      {invisibale ? (
        <CartSidebar invisibale={invisibale} setInvisibale={setInvisibale} />
      ) : null}
    </BrowserRouter>
  );
}

export default Main;
