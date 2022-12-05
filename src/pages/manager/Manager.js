import React from "react";
import { Container } from "react-bootstrap";
import "./Manager.scss";
function Manager() {
  return (
    <div className="manager">
      <Container>
        <button className="btn btn-success">Add</button>
      </Container>
    </div>
  );
}

export default Manager;
