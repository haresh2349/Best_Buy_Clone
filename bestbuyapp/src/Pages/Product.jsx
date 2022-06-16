import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/action";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Style/product.module.css";
import SimpleSlider from "../Components/product_carosul";
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.ViewedProductsReducer);
  //   console.log(store);
  useEffect(() => {
    getSingleProduct(dispatch, id);
  }, [id]);
  return (
    <div>
      <div className={styles.prod_leftBox}>
        <SimpleSlider data={product} />
      </div>
    </div>
  );
};

export default Product;
