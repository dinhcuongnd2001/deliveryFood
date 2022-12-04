import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/selector";
import "./CartSidebar.scss";
function CartSidebar() {
  const dispatch = useDispatch();
  const currCart = useSelector(getCart);
  const handleClose = () => {
    console.log("hi");
  };
  return (
    <div className="cartSidebar">
      <div className="carContent">
        <AiOutlineCloseCircle className="btnClose" onClick={handleClose} />
        {currCart.length ? (
          <div className="listProduct">
            {currCart.map((item) => (
              <div className="info_product">
                <img
                  src={require(`../../asset/images/${item.image01}`)}
                  alt="#error"
                  className="image"
                />
                <div className="desc_product">
                  <h6 className="name">{item.title}</h6>
                  <p className="price_product">
                    <span>X{item.count}</span>
                    <span>${item.count * item.price}</span>
                  </p>
                  <div className="update">
                    <GrAdd /> <span>{item.count}</span> <GrSubtract />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty_cart">
            <h6 className="noti">
              No item add to cart <HiOutlineEmojiSad />
            </h6>
            <BsCartX></BsCartX>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSidebar;
