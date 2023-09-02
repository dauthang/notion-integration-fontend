import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../api/user/user-api";
import { UserRes } from "../../api/user/user.interface";

// Define the initial state using that type
const initialState = {
  listUser: [] as UserRes[],
  isLoading: false,
  error: "",
};

const actions = {
  getListUser: createAsyncThunk(
    "GET/GET_LIST_USER",
    async (undefined, { rejectWithValue }) => {
      const response = await getUser();
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as UserRes[];
    }
  ),
};

const user = createSlice({
  name: "getListUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getListUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getListUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listUser = action.payload;
    });
    builder.addCase(actions.getListUser.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for category
 */
export const userActions = { ...user.actions, ...actions };

export default user.reducer;
