import React from "react";
import "./Home.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  RightOutlined,
  CarOutlined,
  PropertySafetyOutlined,
} from "@ant-design/icons";
function Home() {
  return (
    <Container>
      <div className="Banner">
        <div className="left">
          <h5 className="info">Easy way to make an order</h5>
          <h1 className="sologan">
            <span className="custom upcase">Hungry? </span>
            Just wait food at
            <span className="custom"> your door</span>
          </h1>

          <p className="desc mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            repudiandae nam quo voluptatibus cum sit?
          </p>

          <div className="row mb-60">
            <Link to="/foods" className="btn bnt-1">
              Order now <RightOutlined />
            </Link>
            <Link to="/foods" className="btn btn-2">
              See All Foods
            </Link>
          </div>
          <div className="row">
            <div className="service">
              <CarOutlined />

              <div className="desc">No shipping charge</div>
            </div>

            <div className="service">
              <PropertySafetyOutlined />
              <div className="desc">100% secure checkout</div>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            className="image"
            src={require("../asset/images/hero.png")}
            alt="#error"
          />
        </div>
      </div>

      <div className="category">
        <div className="col">
          <img src="" alt="" />
          <span className="name"></span>
        </div>
        <div className="col">
          <img src="" alt="" />
          <span className="name"></span>
        </div>
        <div className="col">
          <img src="" alt="" />
          <span className="name"></span>
        </div>
        <div className="col">
          <img src="" alt="" />
          <span className="name"></span>
        </div>
      </div>
    </Container>
  );
}

export default Home;
