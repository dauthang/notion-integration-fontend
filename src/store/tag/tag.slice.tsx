import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "../../api/tag/task-api";
import { TagReponse } from "../../api/tag/task.interface";

// Define the initial state using that type
const initialState = {
  getTags: [] as TagReponse[],
  isLoading: false,
  error: "",
};

const actions = {
  getListTag: createAsyncThunk(
    "GET/GET_LIST_TAG",
    async (_, { rejectWithValue }) => {
      const response = await getTags();
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as TagReponse[];
    }
  ),
};

const tag = createSlice({
  name: "getListTag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getListTag.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getListTag.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getTags = action.payload;
    });
    builder.addCase(actions.getListTag.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for Tag
 */
export const tagActions = { ...tag.actions, ...actions };

export default tag.reducer;
