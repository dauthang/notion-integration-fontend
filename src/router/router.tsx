import { createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { ProductForm } from "../container/product/product-form";
import MyLayout from "../layout/MyLayout";
import { Product } from "../views/product/Product";
import { UserView } from "../views/user/User";

export const createRouter = createRoutesFromElements(
  <Route path="/" element={<MyLayout />}>
    <Route index element={<Navigate to="/user" replace />} />
    <Route path="user" element={<UserView />} />
    <Route path="product" element={<Product />} />
    <Route path="product/create" element={<ProductForm />} />
  </Route>
);
