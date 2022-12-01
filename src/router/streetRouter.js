import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Foods from "../pages/Foods";
import Contact from "../pages/Contact";
import Products from "../components/product/Products";
import Page404 from "../components/page404/Page404";
import ProductDetail from "../components/productDetail/ProductDetail";
function StreetRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foods" element={<Foods />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default StreetRouter;
