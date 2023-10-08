import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import userReducer, { userActions } from "./user/user.slice";
import productReducer, { productActions } from "./product/product.slice";
import notionReducer, { notionActions } from "./notion/notion.slice";
import taskReducer, { taskActions } from "./task/task.slice";
import statusReducer, { statusActions } from "./status/status.slice";
import tagReducer, { tagActions } from "./tag/tag.slice";
const actions = {
  user: userActions,
  product: productActions,
  notion: notionActions,
  task: taskActions,
  status: statusActions,
  tag: tagActions,
};

const reducers = {
  userList: userReducer,
  products: productReducer,
  notion: notionReducer,
  task: taskReducer,
  status: statusReducer,
  tag: tagReducer,
};

const store = configureStore({
  reducer: reducers,
});

export type TStore = ReturnType<typeof store.getState>;

export { Provider, useDispatch, useSelector, actions };

export default store;
