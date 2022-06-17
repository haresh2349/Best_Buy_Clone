import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../Components/CartItems";
import OrderSummary from "../Components/OrderSummary";
import { getCartData } from "../Redux/action";
import styles from "../Style/cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.ProductsReducer);
  useEffect(() => {
    getCartData(dispatch);
  }, []);
  return (
    <div className={styles.cart}>
      <CartItems cartData={cart} />
      <OrderSummary />
    </div>
  );
};

export default Cart;
