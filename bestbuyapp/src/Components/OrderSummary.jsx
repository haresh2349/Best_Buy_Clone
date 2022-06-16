import React from "react";
import { Link } from "react-router-dom";
import styles from "../Style/cart.module.css";
const OrderSummary = () => {
  return (
    <div className={styles.order_summary}>
      <h2>Order Summary</h2>
      <div className={styles.totalDiv}>
        <div>
          <p>Original Price</p>
          <p>$1,549.99</p>
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
          <p>$63.61</p>
        </div>
      </div>
      <div className={styles.total}>
        <h3>Total</h3>
        <h3>$1,413.60</h3>
      </div>
      <button className={styles.checkoutBtn}>Checkout</button>
      <button className={styles.paypalBtn}>
        <i>Paypal</i>
        <span>Checkout</span>
      </button>
      <p>
        <Link to="#">Sign in or create an account now</Link> to get My Best Buy™
        Points
      </p>
    </div>
  );
};

export default OrderSummary;
