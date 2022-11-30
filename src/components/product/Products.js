import React, { useState, useEffect } from "react";
import SessionFood from "../sessionFood/SessionFood";
import Container from "react-bootstrap/Container";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getFoodsByMulSelection,
  getAllFoods,
  getCategory,
} from "../../redux/selector";
import "./product.scss";
import filterSilce from "../../redux/filterSlice";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [typeCost, setTypeCost] = useState("Default");
  const dispatch = useDispatch();

  // const allFoods = useSelector(getAllFoods);
  // const categoryFood = useSelector(getCategory);
  // console.log(categoryFood);
  const allFoodsName = useSelector(getFoodsByMulSelection);
  // console.log("allFood : ", allFoods);
  console.log("allfoodName: ", allFoodsName);
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
        </div>
      </Container>
    </div>
  );
}

export default Products;
