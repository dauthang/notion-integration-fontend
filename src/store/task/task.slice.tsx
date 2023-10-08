import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTask } from "../../api/task/task-api";
import { TaskReponse, TaskRequest } from "../../api/task/task.interface";

// Define the initial state using that type
const initialState = {
  getTask: [] as TaskReponse[],
  isLoading: false,
  error: "",
};

const actions = {
  getListTask: createAsyncThunk(
    "GET/GET_LIST_TASK",
    async (params: TaskRequest, { rejectWithValue }) => {
      const response = await getTask(params);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as TaskReponse[];
    }
  ),
};

const task = createSlice({
  name: "getListTask",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getListTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getListTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getTask = action.payload;
    });
    builder.addCase(actions.getListTask.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for Task
 */
export const taskActions = { ...task.actions, ...actions };

export default task.reducer;
