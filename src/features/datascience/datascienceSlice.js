import datascienceService from "./datascienceService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    stats: [],
    ranking: [],
    forms: []
};

export const commentSlice = createSlice({
    name: "datascience",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
         builder
            .addCase(getStats.fulfilled, (state, action) => {
                state.stats = action.payload;
            })
            .addCase(getRanking.fulfilled, (state, action) => {
                state.ranking = action.payload;
            })
            .addCase(getForm.fulfilled, (state, action) => {
                state.forms = action.payload;
            })
    }
});

export const getStats = createAsyncThunk("datascience/getStats", async (thunkAPI) => {
    try {
      return await datascienceService.getStats();
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const getRanking = createAsyncThunk("datascience/getRanking", async (thunkAPI) => {
    try {
      return await datascienceService.getRanking();
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const getForm = createAsyncThunk("datascience/getForm", async (thunkAPI) => {
    try {
      return await datascienceService.getForm();
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const postForm = createAsyncThunk("datascience/postForm", async (thunkAPI) => {
    try {
      return await datascienceService.postForm();
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export default commentSlice.reducer;