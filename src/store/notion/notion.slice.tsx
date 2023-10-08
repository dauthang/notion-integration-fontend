import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNotion } from "../../api/notion/notion-api";
import { NotionRequest, NotionRes } from "../../api/notion/notion.interface";

// Define the initial state using that type
const initialState = {
  getNotionData: {} as NotionRes,
  isLoading: false,
  error: "",
};

const actions = {
  getListNotion: createAsyncThunk(
    "GET/GET_LIST_NOTION",
    async (params: NotionRequest, { rejectWithValue }) => {
      const response = await getNotion(params);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
      return response as unknown as NotionRes;
    }
  ),
};

const notion = createSlice({
  name: "getListUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getListNotion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getListNotion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getNotionData = action.payload;
    });
    builder.addCase(actions.getListNotion.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

/**
 * Export all actions, reducer for Notion
 */
export const notionActions = { ...notion.actions, ...actions };

export default notion.reducer;
