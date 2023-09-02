import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import userReducer, { userActions } from "./user/user.slice";
import productReducer, { productActions } from "./product/product.slice";
const actions = {
  user: userActions,
  product: productActions,
};

const reducers = {
  userList: userReducer,
  products: productReducer,
};

const store = configureStore({
  reducer: reducers,
});

export type TStore = ReturnType<typeof store.getState>;

export { Provider, useDispatch, useSelector, actions };

export default store;
