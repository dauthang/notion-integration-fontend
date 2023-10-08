import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStatuses } from "../../api/status/status-api";
import { StatusReponse } from "../../api/status/status.interface";
import { getTask } from "../../api/task/task-api";
import { TaskReponse, TaskRequest } from "../../api/task/task.interface";

// Define the initial state using that type
const initialState = {
  getStatuses: [] as StatusReponse[],
  isLoading: false,
  error: "",
};

const actions = {
  getListStatus: createAsyncThunk(
    "GET/GET_LIST_NOTION",
    async (_, { rejectWithValue }) => {
      const response = await getStatuses();
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as StatusReponse[];
    }
  ),
};

const status = createSlice({
  name: "getListStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getListStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getListStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getStatuses = action.payload;
    });
    builder.addCase(actions.getListStatus.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for Status
 */
export const statusActions = { ...status.actions, ...actions };

export default status.reducer;
