import React, { useState } from "react";
import "./Home.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import filterSilce from "../redux/filterSlice";
import { getFoodsBySelect } from "../redux/selector";
import {
  RightOutlined,
  CarOutlined,
  PropertySafetyOutlined,
} from "@ant-design/icons";
function Home() {
  const foods = useSelector(getFoodsBySelect);
  console.log(foods);
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(filterSilce.actions.byCategory(value));
    setFilter(value);
  };
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

      <div className="Category">
        <div className="col">
          <img
            className="image"
            src={require("../asset/images/category-01.png")}
            alt="#error"
          />
          <span className="name">Fastfood</span>
        </div>
        <div className="col">
          <img
            className="image"
            src={require("../asset/images/category-02.png")}
            alt="#error"
          />
          <span className="name">Pizza</span>
        </div>
        <div className="col">
          <img
            className="image"
            src={require("../asset/images/category-03.png")}
            alt="#error"
          />
          <span className="name">Asian Food</span>
        </div>
        <div className="col">
          <img
            className="image"
            src={require("../asset/images/category-04.png")}
            alt="#error"
          />
          <span className="name">Row Meat</span>
        </div>
      </div>

      <div className="Service">
        <div className="info">
          <h5 className="title">What we serve</h5>
          <h2 className="sologan">Just sit back at home</h2>
          <h2 className="sologan mb-40">
            We will <span className="custom">take care</span>
          </h2>
          <p className="desc">
            Lorem ipsum dolor consectetur adipisicing. Iure eum vitae suscipit
            temporibus!
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur elit. Iure facere optio eaque
            ex?
          </p>
        </div>

        <div className="detail">
          <div className="item">
            <img
              src={require("../asset/images/service-01.png")}
              alt="#error"
              className="image"
            />
            <h5 className="name">Quick Delivery</h5>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti maiores?
            </p>
          </div>

          <div className="item">
            <img
              src={require("../asset/images/service-02.png")}
              alt="#error"
              className="image"
            />
            <h5 className="name">Super Dine In</h5>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti maiores?
            </p>
          </div>

          <div className="item">
            <img
              src={require("../asset/images/service-03.png")}
              alt="#error"
              className="image"
            />
            <h5 className="name">Easy Pick Up</h5>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti maiores?
            </p>
          </div>
        </div>
      </div>

      <div className="Popular">
        <h2 className="title">Popular Foods</h2>
        <div className="filter">
          <div
            onClick={() => handleClick("All")}
            className={filter == "All" ? "btn active" : "btn"}
          >
            All
          </div>
          <div
            onClick={() => handleClick("Burger")}
            className={filter == "Burger" ? "btn active" : "btn"}
          >
            <img
              className="image"
              src={require("../asset/images/hamburger.png")}
              alt="#error"
            />
            Burger
          </div>
          <div
            onClick={() => handleClick("Pizza")}
            className={filter == "Pizza" ? "btn active" : "btn"}
          >
            <img
              className="image"
              src={require("../asset/images/pizza.png")}
              alt="#error"
            />
            Pizza
          </div>
          <div
            onClick={() => handleClick("Bread")}
            className={filter == "Bread" ? "btn active" : "btn"}
          >
            <img
              className="image"
              src={require("../asset/images/bread.png")}
              alt="#error"
            />
            Bread
          </div>
        </div>
        <div className="product">
          {foods?.map((food) => (
            <div className="food">
              <img
                className="image"
                src={require(`../asset/images/${food.image01}`)}
              />
              <div className="footer">
                <h5 className="name">{food.title}</h5>
                <div className="detail">
                  <span className="cost">${food.price}</span>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Home;
