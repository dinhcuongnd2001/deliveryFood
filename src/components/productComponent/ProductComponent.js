import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userSlice from "../../redux/userSlice";
import "./ProductComponent.scss";
function ProductComponent({ food }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShow = (food) => {
    navigate("../productDetail", { state: { food: food } });
  };
  const handleAddToCard = (food) => {
    dispatch(userSlice.actions.addQuantity(food));
  };
  return (
    <div className="food" key={food.id}>
      <img
        className="image"
        src={require(`../../asset/images/${food.image01}`)}
      />
      <div className="footer">
        <h6 onClick={() => handleShow(food)} className="name">
          {food.title}
        </h6>
        <div className="detail">
          <span className="cost">${food.price}</span>
          <button onClick={() => handleAddToCard(food)} className="btn">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
