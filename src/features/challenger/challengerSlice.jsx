import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import challengersService from "./challengerService";

const initialState = {
  challengers: [],
  isLoading: false,
  challenger: {},
};

export const getAll = createAsyncThunk("challengers/getAll", async () => {
  try {
    return await challengersService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("challengers/getById", async (id) => {
  try {
    return await challengersService.getById(id);
  } catch (error) {
    console.error(error);
  }
});

export const deleteChallenger = createAsyncThunk("challengers/deleteChallenger", async (id) => {
  try {
    return await challengersService.deleteChallenger(id);
  } catch (error) {
    console.error(error);
  }
});
export const getChallengerByName = createAsyncThunk(
  "challengers/getChallengerByName",
  async (challengerName) => {
    try {
      return await challengersService.getChallengerByName(challengerName);
    } catch (error) {
      console.error(error);
    }
  }
);

export const challengerSlice = createSlice({
  name: "challengers",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.challengers = action.payload;
    });
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.challenger = action.payload;
    });
    builder.addCase(deleteChallenger.fulfilled, (state, action) => {
      console.log(action.payload);
      state.challengers = state.challengers.filter(
        (challenger) => challenger.id !== +action.payload.id
      );
    });
    builder.addCase(getChallengerByName.fulfilled, (state, action) => {
      state.challengers = action.payload;
    });
  },
});

export const { reset } = challengerSlice.actions;
export default challengerSlice.reducer;


