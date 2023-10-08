import { createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { ProductForm } from "../container/product/product-form";
import MyLayout from "../layout/MyLayout";
import { DashboardView } from "../views/dashboard/Dashboard";
import { NotionView } from "../views/notion/Notion";
import { Product } from "../views/product/Product";
import { UserView } from "../views/user/User";

export const createRouter = createRoutesFromElements(
  <Route path="/" element={<MyLayout />}>
    <Route index element={<Navigate to="/dashboard" replace />} />
    <Route path="notion" element={<NotionView />} />
    <Route path="user" element={<UserView />} />
    <Route path="product" element={<Product />} />
    <Route path="product/create" element={<ProductForm />} />
    <Route path="dashboard" element={<DashboardView />} />
  </Route>
);
