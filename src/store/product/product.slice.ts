import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../api/product/product-api";
import { ProductRes } from "../../api/product/product.interface";

// Define the initial state using that type
const initialState = {
  products: [] as ProductRes[],
  isLoading: false,
  error: "",
};

const actions = {
  getListProduct: createAsyncThunk(
    "GET/GET_LIST_PRODUCT",
    async (undefined, { rejectWithValue }) => {
      const response = await getProduct();
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as ProductRes[];
    }
  ),
  deleteProduct: createAsyncThunk(
    "GET/DELETE_PRODUCT",
    async (id: string, { rejectWithValue }) => {
      const response = await getProduct(id);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as ProductRes[];
    }
  ),
};

const product = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getListProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getListProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(actions.getListProduct.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
    builder.addCase(actions.deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(actions.deleteProduct.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for category
 */
export const productActions = { ...product.actions, ...actions };

export default product.reducer;
