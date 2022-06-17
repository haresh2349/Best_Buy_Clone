import * as types from "./actionTypes";

const initState = {
  error: false,
  loading: false,
  viewed_products: [],
  featured_products: [],
  laptops: [],
  mobiles: {},
  product: {},
  cart: [],
};
export const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_VIEWED_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_VIEWED_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        viewed_products: action.payload,
      };
    }
    case types.GET_VIEWED_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_FEATURED_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_FEATURED_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        featured_products: action.payload,
      };
    }
    case types.GET_FEATURED_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_LAPTOPS_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_LAPTOPS_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        laptops: action.payload,
      };
    }
    case types.GET_LAPTOPS_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_MOBILES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_MOBILES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        mobiles: action.payload,
      };
    }
    case types.GET_MOBILES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_SINGLE_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        product: action.payload,
      };
    }
    case types.GET_SINGLE_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.ADD_PRODUCT_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.ADD_PRODUCT_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: [...state.cart, action.payload],
      };
    }
    case types.ADD_PRODUCT_CART_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_CART_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_CART_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: action.payload,
      };
    }
    case types.GET_CART_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
