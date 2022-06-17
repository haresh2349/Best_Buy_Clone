import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import styles from "../Style/filter.module.css";
import { Link } from "react-router-dom";
const FilterComponents = () => {
  return (
    <div className={styles.filters}>
      <div className={`${styles.pickup} ${styles.filterBox}`}>
        <h3>Get it fast</h3>
        <div>
          <p>
            <span
              style={{ fontSize: "13px", color: "#1D252C", fontWeight: "bold" }}
            >
              Store Pickup{" "}
            </span>{" "}
            at{" "}
            <span style={{ fontSize: "13px", color: "#0457C8" }}>
              {" "}
              Aiea and nearby stores
            </span>
          </p>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Same-day pickup" />
          </FormGroup>
        </div>
        <div>
          <p>
            <span
              style={{ fontSize: "13px", color: "#1D252C", fontWeight: "bold" }}
            >
              Shipping
            </span>{" "}
            to{" "}
            <span style={{ fontSize: "13px", color: "#0457C8" }}> 96939</span>
          </p>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Same-day shipping"
            />
          </FormGroup>
        </div>
      </div>
      <div className={`${styles.category} ${styles.filterBox}`}>
        <h3>Category</h3>
        <Link to="/">All Laptops</Link>
        <Link to="/">PC Laptops</Link>
      </div>
      <div className={`${styles.brand} ${styles.filterBox}`}>
        <h3>Brand</h3>

        <div>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Dell" />
            <FormControlLabel control={<Checkbox />} label="ASUS" />
            <FormControlLabel control={<Checkbox />} label="Lenevo" />
            <FormControlLabel control={<Checkbox />} label="Microsoft" />
          </FormGroup>
        </div>
      </div>
      <div className={`${styles.features} ${styles.filterBox}`}>
        <h3>Features</h3>
        <div></div>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Front-Facing Camera"
          />
          <FormControlLabel control={<Checkbox />} label="Backlit Keyboard" />
          <FormControlLabel
            control={<Checkbox />}
            label="ENERGY STAR Certified"
          />
          <FormControlLabel control={<Checkbox />} label="2-in-1 Design" />
          <FormControlLabel control={<Checkbox />} label="Headphone Jack" />
          <FormControlLabel control={<Checkbox />} label="Touch Screen" />
          <FormControlLabel
            control={<Checkbox />}
            label="Built-In Microphone"
          />
          <FormControlLabel control={<Checkbox />} label="Wireless-AX" />
        </FormGroup>
      </div>
    </div>
  );
};

export default FilterComponents;
