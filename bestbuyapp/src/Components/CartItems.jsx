import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Style/cart.module.css";
const CartItems = ({ cartData }) => {
  return (
    <div className={styles.cartItems}>
      <h2>Your Cart</h2>
      {cartData.length > 0 ? (
        cartData.map((item) => {
          return (
            <div className={styles.cartItem}>
              <div className={styles.product_img_title}>
                <img src={item.thumb} alt="" />
                <p>{item.title}</p>
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
                  <span>{cartData.quantity}</span>
                  <button className={styles.dec}>-</button>
                </div>
                <button>remove</button>
              </div>
              <div className={styles.cart_price}>
                <h3>${item.price}</h3>
                <span>Save $200</span>
                <p>Was ${item.strike}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
};

export default CartItems;
