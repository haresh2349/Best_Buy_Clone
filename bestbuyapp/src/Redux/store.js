import { combineReducers, legacy_createStore } from "redux";
import { ProductsReducer } from "../Redux/ProductsReducer";

const rootReducer = combineReducers({
  ProductsReducer,
});

export const store = legacy_createStore(rootReducer);
