import React, { useState } from "react";
import styles from "../Style/Checkout.module.css";

const Checkout = () => {
  const [checkOutData, setCheckOutData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setCheckOutData({
      ...checkOutData,
      [name]: value,
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.back_opt}>
            <p>&lt; Back to Pickup & Delivery options</p>
          </div>
          <div className={styles.h_title}>
            <p>Payment Information</p>
          </div>
        </div>
        <div className={styles.f_container}>
          <div className={styles.left}>
            <div className={styles.form_box}>
              <form onSubmit={handleSubmit}>
                <div className={styles.f_item}>
                  <label>Credit or Debit Card Number</label>
                  <input
                    name="card_number"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div className={styles.f_item}>
                  <p>Billing Address</p>
                </div>
                <div className={styles.flex}>
                  <div className={styles.flex_box}>
                    <label>First Name</label>
                    <input
                      name="firstname"
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                  <div className={styles.flex_box}>
                    <label>Last Name</label>
                    <input
                      name="lastname"
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.f_item}>
                  <label>Credit or Debit Card Number</label>
                  <textarea cols={10} name="address" onChange={handleChange} />
                </div>
                <div className={styles.flex}>
                  <div className={styles.city}>
                    <label>City</label>
                    <input name="city" onChange={handleChange} type="text" />
                  </div>
                  <div className={styles.state}>
                    <label>State</label>
                    <input name="state" onChange={handleChange} type="text" />
                  </div>
                  <div className={styles.zipcode}>
                    <label>Zipcode</label>
                    <input name="zipcode" onChange={handleChange} type="text" />
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.form_box}>
              <p className={styles.policy}>
                By placing your order, you agree to our{" "}
                <span>BestBuy.com Term and Conditions</span> and our{" "}
                <span>Privacy Policy</span>{" "}
              </p>
              <button className={styles.btn}>Place Your Order</button>
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

export default Checkout;
