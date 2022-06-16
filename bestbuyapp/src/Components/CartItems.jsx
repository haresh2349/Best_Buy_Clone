import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Style/cart.module.css";
const CartItems = () => {
  return (
    <div className={styles.cartItems}>
      <h2>Your Cart</h2>
      <div className={styles.cartItem}>
        <div className={styles.product_img_title}>
          <img
            src="https://pisces.bbystatic.com/image2//BestBuy_US/images/products/6504/6504388_sd.jpg;maxHeight=100;maxWidth=100"
            alt=""
          />
          <p>
            Dell - Inspiron 2-in-1 16” OLED Touch Laptop – 12th Gen Intel Core
            i7 – 16GB Memory – 512GB SSD – NVIDIA GeForce MX550 - Atlantic Green
          </p>
        </div>
        <div className={styles.radio}>
          <div>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Pickup atAiea Aiea"
            />
            <p>Ready for pickup Today</p>
            <p>Eligible for curbside pickup</p>
          </div>
          <div>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Shipping to 96939"
            />
            <p>Unavailable in this area</p>
          </div>
        </div>
        <div className={styles.qty_add_remove}>
          <div className={styles.qty}>
            <button className={styles.inc}>+</button>
            <span>1</span>
            <button className={styles.dec}>-</button>
          </div>
          <button>remove</button>
        </div>
        <div className={styles.cart_price}>
          <h3>$1,349.99</h3>
          <span>Save $200</span>
          <p>Was $1,549.99</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
