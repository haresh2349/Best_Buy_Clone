import React from "react";
import styles from "../Style/home.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts, getViewedProducts } from "../Redux/action";
import { useEffect } from "react";
import { Home_carosul } from "../Components/Home_carosul";
const Home = () => {
  const { viewed_products, featured_products } = useSelector(
    (store) => store.ProductsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getViewedProducts(dispatch);
  }, [dispatch]);
  useEffect(() => {
    getFeaturedProducts(dispatch);
  }, [dispatch]);
  // console.log(state);
  // console.log(state.viewed_products);
  return (
    <>
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
      <div className={styles.home_c}>
        <div className={styles.home_c_box}>
          <div className={styles.box_content}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72"
              alt="person"
            />
            <div>
              <h3>Shop safely and confidently.</h3>
              <Link to="#">See our safety procedures</Link>
            </div>
          </div>
        </div>
        <div className={styles.home_c_box}>
          <div className={styles.box_content}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72"
              alt="woman"
            />
            <div>
              <h3>Get help shopping from home.</h3>
              <Link to="#">Shop with an Expert</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.yellow}>
        <div className={styles.innerYellow}>
          <div>
            <h3>Insignia™ air fryers product recall.</h3>
            <Link to="#">Learn more</Link>
          </div>
        </div>
      </div>
      <div className={styles.home_d}>
        <div className={styles.home_d_left}>
          <div>
            <h2>Introducing Surface Laptop Go 2.</h2>
            <p>Sleek, light, on the go performance.</p>
            <Link to="/laptop">
              <button className={styles.home_d_btn}>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.home_d_right}>
          <div>
            <h2>Smart Phones</h2>
            <p>as low as $109.99.</p>
            <Link to="/mobiles">
              <button className={styles.home_d_btn}>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.home_e}>
        <div className={styles.home_e1}>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <h3>Ready in one hour</h3>
              <p>with Store or Curbside Pickup.</p>
            </div>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <h3>Free next-day delivery</h3>
              <p>on thousands of items.</p>
            </div>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <h3>Same-day delivery.</h3>
              <p>Order by 3 p.m., get it by 8 p.m.</p>
              <p>Order by 2 p.m. Sunday.</p>
            </div>
          </div>
        </div>
        <div className={styles.home_e2}>
          <div className={styles.home__e2_content}>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/total-tech-stacked-reverse-sol86118-059fc768-50d8-43ab-b62a-3bded1b62731.png"
                alt=""
              />
              <button>Learn More</button>
            </div>
            <div className={styles.vertical_border}></div>
            <div>
              <h2>The membership you and your tech deserve.</h2>
              <p>
                Best Buy Totaltech™ provides 24/7/365 tech support, up to 24
                months of product protection with active membership, free
                standard installation and so much more. Terms and conditions
                apply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home_f}>
        <div className={styles.flexItem}>
          <h3>Father's Day gifts</h3>
          <div className={styles.home_f_gridBox}>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fg-220509-6016e3c8-f983-4ac2-8dc9-b241bf9812da.jpg;maxHeight=432;maxWidth=432"
                  alt="product"
                />
              </div>
              <p>For chill dads</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-outdoors-220509-510c4e8d-b671-4e4c-b1ec-8fd8c41bcd13.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>For outdoorsy dads</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fitness-220509-9d40595e-4ce1-4d7d-8eb4-9d0c9c26e64f.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>For exercise-loving dads</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-chef-220509-ea150d50-2edd-4735-ae5c-a6523eea7f37.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>For chef dads</p>
            </Link>
          </div>
        </div>
        <div className={styles.flexItem}>
          <h3>Grad gift ideas</h3>
          <div className={styles.home_f_gridBox}>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-little-220516-9c86109f-7477-4382-9033-bb1a7d45a00f.jpg;maxHeight=432;maxWidth=432"
                  alt="product"
                />
              </div>
              <p>For little grads</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-middle-220516-5cb33289-f4ed-4e09-ac3e-2ba0e695496b.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>For middle school grads</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-high-220516-30b898c1-65bb-4bcc-8c86-86f1bafda292.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>For high school grads</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-college-220516-7a6d93f6-df65-46e3-be9c-a114e1204842.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>For college grads</p>
            </Link>
          </div>
        </div>
        <div className={styles.flexItem}>
          <h3>We’re driven by our impact</h3>
          <div className={styles.home_f_gridBox}>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-mentorship-220606-bec44b7f-cec2-4932-b5c0-0950e649fa6e.jpg;maxHeight=432;maxWidth=432"
                  alt="product"
                />
              </div>
              <p>Tech access means brighter futures</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-more-love-220606-7dccad72-4487-4593-9c7c-56a5c2afa038.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>More celebrating. More love.</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-circular-eco-220509-e952af56-a1b6-477d-8a25-2ed4159c74e0.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Sustainability is part of our ecosystem</p>
            </Link>
            <Link to="#">
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-tablet-ttc-220509-1f7bc22c-3346-4a3a-9ace-031b35eb2c8e.jpg;maxHeight=432;maxWidth=432"
                  alt=""
                />
              </div>
              <p>Committed to making a difference</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.home_g}>
        <h3>Our featured offers</h3>
        <div className={styles.home_g_gridBox}>
          <div className={`${styles.gridItem} ${styles.border_b_r}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-93899-iphone13-pro-pol_der-f73f557f-62fd-4937-9f7d-1aba33288b71.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>iPhone 13 ProSave up to $800</h3>
            </Link>
            <p>
              with qualified activation and trade-in of iPhone 11 Pro or newer.
            </p>
            <span>Terms and conditions apply.</span>
          </div>
          <div className={`${styles.gridItem} ${styles.border_b_r}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-552481_der-992f5ee6-c7cc-4a54-879e-5fb01fae0462.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Gifts for gaming dads.</h3>
            </Link>
            <p>
              Find an assortment of games, from new hits to classic titles, plus
              an array of accessories.
            </p>
          </div>
          <div className={`${styles.gridItem} ${styles.border_b}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_microsoft-happy-guy-v2-0620-3a7b8bc1-22dd-4fc9-8cf6-905382572981.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Introducing Surface Laptop Go 2.</h3>
            </Link>
            <p>Sleek, light, on the go performance.</p>
          </div>
          <div className={`${styles.gridItem} ${styles.border_r}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/mmt-557424-apple-tv-pol_der-81ccc21e-4d16-428e-aaa0-93003a919044.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Apple TV 4K (2nd gen)Save $50 on the 32GB or 64GB model.</h3>
            </Link>
          </div>
          <div className={`${styles.gridItem} ${styles.border_r}`}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549477_pol_COPE_DER-bb7580c0-afa1-4b6b-9775-d78aa1be89e3.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Save up to $100 on select wearables.</h3>
            </Link>
            <p>
              Keep your goals on track with smartwatches and fitness trackers
              from Fitbit, Garmin and Citizen.
            </p>
            <span>Minimum savings is $20.</span>
          </div>
          <div className={styles.gridItem}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-552448-speakers-pol-der-f2233e68-2161-4487-b9c7-4e1c2cf72a25.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <Link to="">
              <h3>Save up to 25% on select car speakers.</h3>
            </Link>
            <p>Take your audio to the next level with these speakers.</p>
            <span>Minimum savings is 20%.</span>
          </div>
        </div>
      </div>
      <div className={styles.home_h}>
        {viewed_products.length > 0 && (
          <>
            <h3>Related to items you've viewed (6 items)</h3>
            <div className={styles.home_h_products}>
              <Home_carosul data={viewed_products} />
            </div>
          </>
        )}
      </div>
      <div className={styles.home_i}>
        <div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37400-pol-dotd-190823_der-98962.png;maxHeight=280;maxWidth=412"
              alt=""
            />
          </div>

          <Link to="#">
            <h3>Deal of the Day.</h3>
          </Link>
          <p>Great deals. Every day.</p>
        </div>
        <div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37504-pol-outlet-190823-98410.png;maxHeight=280;maxWidth=412"
              alt=""
            />
          </div>
          <Link to="#">
            <h3>Clearance, open-box and more.</h3>
          </Link>
          <p>
            Save when you shop the Best Buy Outlet for clearance, open-box,
            refurbished and pre-owned items.
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className={styles.discount_offered}>
        <div>
          <div className={styles.discount_offered_img}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"
              alt=""
            />
          </div>
          <div className={styles.figure}>
            <h3>Apply today and get</h3>
            <h1>10% back</h1>
          </div>
          <div className={styles.disc}>
            <p>
              in rewards on your first day of purchases when you are approved
              for the Card.
            </p>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div className={styles.home_h}>
        {featured_products.length > 0 && (
          <>
            <h3>Featured products (6 items)</h3>
            <div className={styles.home_h_products}>
              <Home_carosul data={featured_products} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
