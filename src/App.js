import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Img, useImage } from "react-image";
import axios from "axios";
import currentPath from "./asset/currenPath";
import { Link } from "react-router-dom";
import HeaderComponent from "./layout/Header";
import Main from "./layout/Main";

import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "./redux/manageSlice";
import { getStatus, getFoods } from "./redux/selector";
function App() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const foods = useSelector(getFoods);
  const status = useSelector(getStatus);

  console.log(status);

  // call Foods from API
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return <>{status == "loading" ? <h1>Loading</h1> : <Main />}</>;
}

export default App;
