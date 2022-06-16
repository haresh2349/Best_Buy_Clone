import { combineReducers, legacy_createStore } from "redux";
import { ViewedProductsReducer } from "../Redux/ViewedProductsReducer";

const rootReducer = combineReducers({
  ViewedProductsReducer,
});

export const store = legacy_createStore(rootReducer);
