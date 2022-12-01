import React from "react";
import SessionFood from "../sessionFood/SessionFood";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
function ProductDetail() {
  const {
    state: { food },
  } = useLocation();
  console.log(food);
  return (
    <Container>
      <SessionFood title={food.title} />
      Hello ae
    </Container>
  );
}

export default ProductDetail;
