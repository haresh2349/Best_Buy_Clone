import React from "react";
import CartItems from "../Components/CartItems";
import OrderSummary from "../Components/OrderSummary";
import styles from "../Style/cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartItems />
      <OrderSummary />
    </div>
  );
};

export default Cart;
