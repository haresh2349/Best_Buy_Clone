import React from "react";
import Slider from "react-slick";
import styles from "../Style/product.module.css";
export default function SimpleSlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(data, "dd");
  return (
    <Slider {...settings}>
      <h1>Hello</h1>
      {data.images.length > 0 &&
        data.images.map((el) => {
          <div className={styles.img_box}>
            <img src={el.img} alt="" />
          </div>;
        })}
    </Slider>
  );
}
