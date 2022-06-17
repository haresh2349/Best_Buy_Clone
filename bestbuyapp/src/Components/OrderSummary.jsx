import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Style/cart.module.css";
const OrderSummary = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store) => store.ProductsReducer);
  useEffect(() => {
    const t_c = cart.reduce((total, a) => {
      return total + a.quantity * a.price;
    }, 0);
    setTotalCost(t_c);
    setTax(t_c * 0.12);
    setTotal(t_c - 200 + tax);
  }, [cart]);
  console.log(cart);
  return (
    <div className={styles.order_summary}>
      <h2>Order Summary</h2>
      <div className={styles.totalDiv}>
        <div>
          <p>Original Price</p>
          <p>${totalCost}</p>
        </div>
        <div>
          <p>Savings</p>
          <p>-$200.00</p>
        </div>
        <div>
          <p>Store Pickup</p>
          <p>FREE</p>
        </div>
        <div className={styles.tax}>
          <p>Estimated Sales Tax</p>
          <p>${tax}</p>
        </div>
      </div>
      <div className={styles.total}>
        <h3>Total</h3>
        <h3>${total}</h3>
      </div>
      <Link to="/checkout">
        <button className={styles.checkoutBtn}>Checkout</button>
      </Link>
      <button className={styles.paypalBtn}>
        <i>Paypal</i>
        <span>Checkout</span>
      </button>
      <p>
        <Link to="/signup">Sign in or create an account now</Link> to get My
        Best Buy™ Points
      </p>
    </div>
  );
};

export default OrderSummary;
