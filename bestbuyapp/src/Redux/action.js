import * as types from "./actionTypes";
import axios from "axios";
export const getViewedProducts = (dispatch) => {
  let mobiles = JSON.parse(localStorage.getItem("mobiles")) || [];
  dispatch({
    type: types.GET_VIEWED_PRODUCTS_REQUEST,
  });
  dispatch({
    type: types.GET_VIEWED_PRODUCTS_SUCCESS,
    payload: mobiles,
  });
  dispatch({
    type: types.GET_VIEWED_PRODUCTS_FAILURE,
  });
};
export const getFeaturedProducts = (dispatch) => {
  let featured_products =
    JSON.parse(localStorage.getItem("featured_products")) || [];
  dispatch({
    type: types.GET_FEATURED_PRODUCTS_REQUEST,
  });
  dispatch({
    type: types.GET_FEATURED_PRODUCTS_SUCCESS,
    payload: featured_products,
  });
  dispatch({
    type: types.GET_FEATURED_PRODUCTS_FAILURE,
  });
};

export const getLaptopsData = (dispatch) => {
  let laptops = JSON.parse(localStorage.getItem("laptops")) || [];

  // dispatch({
  //   type: types.GET_LAPTOPS_DATA_REQUEST,
  // });
  dispatch({
    type: types.GET_LAPTOPS_DATA_SUCCESS,
    payload: laptops,
  });
  // dispatch({
  //   type: types.GET_LAPTOPS_DATA_FAILURE,
  // });
};

export const getMobiles = (dispatch) => {
  let mobiles = JSON.parse(localStorage.getItem("mobiles")) || [];

  // dispatch({
  //   type: types.GET_MOBILES_REQUEST,
  // });
  dispatch({
    type: types.GET_MOBILES_SUCCESS,
    payload: mobiles,
  });
  // dispatch({
  //   type: types.GET_MOBILES_FAILURE,
  // });
};

export const getSingleProduct = (dispatch, id, category) => {
  let data = [];
  if (category == "mobiles") {
    data = JSON.parse(localStorage.getItem("mobiles")) || [];
  } else if (category == "laptops") {
    data = JSON.parse(localStorage.getItem("laptops")) || [];
  }
  let filter = data.filter((item) => {
    return id == item.id && item;
  });
  // dispatch({
  //   type: types.GET_SINGLE_PRODUCT_REQUEST,
  // });
  dispatch({
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload: filter[0],
  });
  // dispatch({
  //   type: types.GET_SINGLE_PRODUCT_FAILURE,
  // });
};

export const addProductCart = (dispatch, product) => {
  // dispatch({
  //   type: types.ADD_PRODUCT_CART_REQUEST,
  // });
  console.log(product, "ACTION");

  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  let newData = [...cartData, { ...product, quantity: 1 }];
  localStorage.setItem("cart", JSON.stringify(newData));

  dispatch({
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload: product,
  });
  // axios
  //   .post("http://localhost:8080/cart", { ...product, quantity: 1 })
  //   .then((res) => {
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     dispatch({
  //       type: types.ADD_PRODUCT_CART_FAILURE,
  //     });
  //   });
};
export const getCartData = (dispatch) => {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  dispatch({
    type: types.GET_CART_DATA_SUCCESS,
    payload: cartData,
  });
  // dispatch({
  //   type: types.GET_CART_DATA_REQUEST,
  // });
  // return axios
  //   .get("http://localhost:8080/cart")
  //   .then((res) => {
  // dispatch({
  //   type: types.GET_CART_DATA_SUCCESS,
  //   payload: res.data,
  // });
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: types.GET_CART_DATA_FAILURE,
  //     });
  //   });
};
