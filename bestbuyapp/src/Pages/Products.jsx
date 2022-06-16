import React, { useEffect } from "react";
import FilterComponents from "../Components/FilterComponents";
import SelectSmall from "../Components/SelectComponent";
import styles from "../Style/products.module.css";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getLaptopsData } from "../Redux/action";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Products = () => {
  const dispatch = useDispatch();
  const { laptops } = useSelector((store) => store.ViewedProductsReducer);
  useEffect(() => {
    getLaptopsData(dispatch);
  }, []);
  console.log(laptops, "stoe");
  return (
    <div className={styles.productsMain}>
      <FilterComponents />
      <div className={styles.productsRightBox}>
        <div className={styles.products_right_top}>
          <p>10 items</p>
          <div>
            <span>Sort By :</span>
            <SelectSmall />
          </div>
        </div>
        {laptops.length > 0 &&
          laptops.map((item) => {
            return (
              <div className={styles.prodFlexBox}>
                <div className={styles.prodImage}>
                  <img src={item.thumb} alt="laptop" />
                </div>
                <div className={styles.prodDetails}>
                  <Link to="#">{item.title}</Link>
                  <div className={styles.model}>
                    <span>
                      {" "}
                      <b>Model</b>:{item.model}
                    </span>
                    <span>
                      {" "}
                      <b>SKU</b> :{item.sku}
                    </span>
                  </div>
                  <div className={styles.rating}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <span>({item.reviews} reviews)</span>
                  </div>
                  <strong>Get it today</strong>
                  <div className={styles.pickup}>
                    <LocalOfferOutlinedIcon />
                    <div>
                      <b>Pickup: </b>Available today at Aiea
                      <p style={{ fontSize: "11px" }}>
                        Act Fast – Only 2 left at your store!
                      </p>
                      <Link to="#">See all pickup locations</Link>
                    </div>
                  </div>
                  <div className={styles.shopping}>
                    <LocalShippingOutlinedIcon />
                    <div>
                      <b>Shipping: </b>Unavailable in your area
                      <p style={{ fontSize: "11px" }}>
                        This item is only available in certain markets.
                      </p>
                      <Link to="#">Estimates for 96939</Link>
                    </div>
                  </div>
                  <div className={styles.compare_save}>
                    <FormControlLabel control={<Checkbox />} label="Compare" />
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />
                      }
                      label="Save"
                    />
                  </div>
                </div>
                <div className={styles.prodToCart}>
                  <div className={styles.priceDiv}>
                    <h2>${item.price}</h2>
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
                      <span>Was ${item.strike}</span>
                    </p>
                  </div>
                  <div className={styles.security}>
                    <b>Free 6-month security software</b>
                    <span>A $29.99 value</span>
                  </div>
                  <button>
                    <ShoppingCartIcon /> <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
