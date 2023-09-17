import React from "react";
import "./Cart.css";
const CartIconComponent = () => {
  const quantity = 5;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default CartIconComponent;
