import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Foods from "../pages/Foods";
import Contact from "../pages/Contact";
function StreetRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default StreetRouter;
