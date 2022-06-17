import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductCart, getSingleProduct } from "../Redux/action";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../Style/product.module.css";
import SimpleSlider from "../Components/product_carosul";
const Product = () => {
  const { id, category } = useParams();
  const dispatch = useDispatch();
  const { product, cartData } = useSelector((store) => store.ProductsReducer);
  useEffect(() => {
    getSingleProduct(dispatch, id, category);
  }, [id]);
  const handleCart = () => {
    addProductCart(dispatch, product);
  };
  return (
    <div className={styles.single_product}>
      <div className={styles.prod_leftBox}>
        {product?.images && <SimpleSlider data={product.images} />}
      </div>
      <div className={styles.prod_rightBox}>
        <div className={styles.productHead}>
          <h4>{product.brand}</h4>
          <h3>{product.title}</h3>
          <div>
            <span>
              <b>Model:</b>
              {product.model}
            </span>
            <span>
              <b>SKU:</b>
              {product.sku}
            </span>
          </div>
        </div>
        <div className={styles.productRating}>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span>({product.reviews} reviews)</span>
        </div>
        <div className={styles.productPrice}>
          <h2>${product.price}</h2>
          <p>
            <span
              style={{
                background: "#BB0628",
                color: "#ffff",
                padding: "3px",
              }}
            >
              Save $200
            </span>
            <span>Was ${product.strike}</span>
          </p>
        </div>
        <button onClick={handleCart} className={styles.addToCartBtn}>
          <ShoppingCartIcon /> <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
