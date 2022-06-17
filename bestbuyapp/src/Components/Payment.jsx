import React from "react";
import { Link } from "react-router-dom";
import styles from "../Style/Payment.module.css";

const Payment = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.h_title}>
            <p>Getting your Order</p>
          </div>
        </div>
        <div className={styles.f_container}>
          <div className={styles.left}>
            <div className={styles.form_box}>
              <div className={`${styles.box_heading}`}>
                <p>Store pickup details</p>
              </div>
              <div className={`${styles.box_sub_heading}`}>
                <p>Ready for pickup</p>
              </div>
              <div className={styles.border}></div>
              <div className={`${styles.box_sub_heading}`}>
                <p>Address</p>
              </div>
              <div className={`${styles.item}`}>
                <p>908, Abu Highway 385001</p>
              </div>
              <div className={`${styles.box_sub_heading}`}>
                <p>Pickup Person</p>
              </div>
              <div className={`${styles.item}`}>
                <p>Username</p>
                <p>Remember to bring your ID proof</p>
              </div>
              <div className={styles.border}></div>

              <div className={styles.item}>
                <Link to="/payment" className={styles.btn}>
                  Continue to Payment Information
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.form_box}>
              <div className={styles.b_title}>
                <p>Order Summary</p>
              </div>
              <div className={styles.cart_items}>
                <div className={styles.cart_ietm}>
                  <div className={styles.i_left}>
                    <div className={styles.img}>
                      <img
                        src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429638_rd.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles.i_title}>
                      Arlo - Essential XL Spotlight Camera – Indoor/Outdoor
                      Wire-Free 1080p Security Camera - White
                    </div>
                  </div>
                  <div className={styles.i_right}>
                    <p className={styles.price}>1000</p>
                    <p className={styles.quantity}>Qty. 1</p>
                  </div>
                </div>
              </div>
              <div className={styles.border}></div>
              <div className={styles.cart_total}>
                <div className={styles.c_flex}>
                  <div className={styles.c_f_left}>Item Subtotal</div>
                  <div className={styles.c_f_right}>1400</div>
                </div>
                <div className={styles.c_flex}>
                  <div className={`${styles.c_f_left} ${styles.blue} `}>
                    Estimate Tax
                  </div>
                  <div className={`${styles.c_f_right} ${styles.blue}`}>63</div>
                </div>
              </div>
              <div className={styles.border}></div>
              <div className={styles.total_price}>
                <div className={styles.c_flex}>
                  <div className={`${styles.c_f_left} ${styles.bold}`}>
                    Total
                  </div>
                  <div className={`${styles.c_f_right} ${styles.bold}`}>
                    1463
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
