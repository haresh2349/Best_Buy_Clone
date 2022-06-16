import * as types from "./actionTypes";
import axios from "axios";
export const getViewedProducts = (dispatch) => {
  dispatch({
    type: types.GET_VIEWED_PRODUCTS_REQUEST,
  });
  axios
    .get("http://localhost:8080/mobiles")
    .then((res) => {
      dispatch({
        type: types.GET_VIEWED_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_VIEWED_PRODUCTS_FAILURE,
      });
    });
};
export const getFeaturedProducts = (dispatch) => {
  dispatch({
    type: types.GET_FEATURED_PRODUCTS_REQUEST,
  });
  axios
    .get("http://localhost:8080/featured_products")
    .then((res) => {
      dispatch({
        type: types.GET_FEATURED_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_FEATURED_PRODUCTS_FAILURE,
      });
    });
};

export const getLaptopsData = (dispatch) => {
  dispatch({
    type: types.GET_LAPTOPS_DATA_REQUEST,
  });
  axios
    .get("http://localhost:8080/laptops")
    .then((res) => {
      dispatch({
        type: types.GET_LAPTOPS_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_LAPTOPS_DATA_FAILURE,
      });
    });
};
