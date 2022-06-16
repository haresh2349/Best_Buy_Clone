import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import styles from "../Style/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

export function Home_carosul({ data }) {
  console.log(data, "d");
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div className={styles.home_h_product} key={item.id}>
              <div className={styles.home_h_img}>
                <img src={item.thumb} alt="product" />
              </div>
              <div className={styles.home_h_title}>{item.title}</div>
              <div className={styles.home_h_rating}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={styles.home_h_price}>${item.price}/mo</div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
