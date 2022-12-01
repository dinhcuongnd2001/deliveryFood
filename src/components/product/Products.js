import React, { useState, useEffect } from "react";
import SessionFood from "../sessionFood/SessionFood";
import Container from "react-bootstrap/Container";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getFoodsByMulSelection,
  getAllFoods,
  getCategory,
} from "../../redux/selector";
import "./product.scss";
import filterSilce from "../../redux/filterSlice";
import Page404 from "../page404/Page404";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [typeCost, setTypeCost] = useState("Default");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const allFoods = useSelector(getAllFoods);
  // const categoryFood = useSelector(getCategory);
  // console.log(categoryFood);
  // console.log("allFood : ", allFoods);
  // console.log("allfoodName: ", allFoodsName);
  const allFoodsName = useSelector(getFoodsByMulSelection);
  useEffect(() => {
    dispatch(filterSilce.actions.byCategory("All"));
  }, []);

  const handleChange = (e) => {
    dispatch(filterSilce.actions.byName(e.target.value));
    setSearch(e.target.value);
  };

  const changeCategory = (e) => {
    dispatch(filterSilce.actions.byCategory(e.target.value));
    setCategory(e.target.value);
  };

  const handleTypeCost = (e) => {
    dispatch(filterSilce.actions.byTypeCost(e.target.value));
    setTypeCost(e.target.value);
  };

  const handleClick = (food) => {
    navigate("../productDetail", { state: { food: food } });
  };
  return (
    <div>
      <SessionFood title="All Foods" />
      <Container>
        <div className="content">
          <div className="filter">
            <div className="search">
              <input
                value={search}
                onChange={(e) => handleChange(e)}
                type="text"
                className="input"
                placeholder="I'm looking for"
              />
              <SearchOutlined />
            </div>

            <div className="Category">
              <select
                name=""
                id=""
                value={category}
                onChange={(e) => changeCategory(e)}
              >
                <option value="All">Default</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Bread">Bread</option>
              </select>
            </div>

            <div className="Price">
              <select
                name=""
                id=""
                value={typeCost}
                onChange={(e) => handleTypeCost(e)}
              >
                <option value="Default">Default</option>
                <option value="High">High Cost</option>
                <option value="Low">Low Cost</option>
              </select>
            </div>
          </div>
          <div className="product">
            {allFoodsName.length > 0 ? (
              allFoodsName.map((food) => (
                <div className="food" key={food.id}>
                  <img
                    className="image"
                    src={require(`../../asset/images/${food.image01}`)}
                  />
                  <div className="footer">
                    <h6 onClick={() => handleClick(food)} className="name">
                      {food.title}
                    </h6>
                    <div className="detail">
                      <span className="cost">${food.price}</span>
                      <button className="btn">Add Cart</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Page404 />
            )}
          </div>
        </div>
        {/* <Page404></Page404> */}
      </Container>
    </div>
  );
}

export default Products;
