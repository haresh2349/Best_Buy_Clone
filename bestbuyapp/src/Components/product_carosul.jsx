import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Style/product.module.css";
import "../Style/product_carosul.module.css";
import "../App.css";
export default function SimpleSlider({ data }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.length > 0 &&
        data.map((el) => {
          return (
            <div className={styles.img_box}>
              <img src={el.img} alt="" />
            </div>
          );
        })}
    </Slider>
  );
}
