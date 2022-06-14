import React from "react";
import styles from "../Style/home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_a}>
        <div className={styles.home_a_left}>
          <div className={styles.h_a_left_img}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_2022TopDeals-GHPApp-LV-55adde1f-dd0b-48d7-9a08-b28bbc00187d.jpg"
              alt="image"
            />
          </div>
          <div className={styles.h_a_left_over}>
            <h1>Deal Mode Activated</h1>
            <button>Shop Now</button>
          </div>
        </div>
        <div className={styles.home_a_right}>
          <div className={styles.h_a_right_top}>
            <h3>Today's popular picks</h3>
            <div className={styles.pop_products}>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="iPad"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi - 64GB -
                  Space Gray
                </div>
              </div>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="iWatch"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Apple Watch Series 7 (GPS) 41mm Midnight Aluminum Case with
                  Midnight Sport Band - Midnight
                </div>
              </div>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="macbook"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB
                  SSD - Space Gray
                </div>
              </div>
              <div className={styles.pop_item}>
                <div className={styles.pop_item_image}>
                  <img
                    src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=640;maxWidth=550"
                    alt="iPhone"
                  />
                </div>
                <div className={styles.pop_item_title}>
                  Apple - iPhone 13 Pro Max 5G 128GB - Alpine Green (T-Mobile)
                </div>
              </div>
            </div>
          </div>
          <div className={styles.h_a_right_bottom}>
            <div className={styles.h_a_r_b_1}>
              <h3>
                <span>Outlet</span>Deals
              </h3>
              <div className={styles.h_r_b_img}>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
                  alt="text"
                />
              </div>
              <div className={styles.link}>View outlet deals</div>
            </div>
            <div className={styles.h_a_r_b_2}>
              <h3>
                <span>Deals </span> of the Day
              </h3>
              <div className={styles.h_r_b_img}>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74994-dotd-061422-01-d9ad73e5-ca77-49d1-afbc-80e67fba083e.jpg;maxHeight=428;maxWidth=644"
                  alt="comics"
                />
              </div>
              <div className={styles.link}>
                Save $20 on The Legend of Zelda: Skyward Sword HD game for
                Switch and Zelda & Loftwing amiibo bundle.
              </div>
              <br />
              <div className={styles.link}>See bonus deals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
