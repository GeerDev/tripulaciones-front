import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import challengeService from "./challengeService";

const initialState = {
  challenges: [],
  challenge: {},
  isLoading: false
};

export const getAll = createAsyncThunk("challenges/getAll", async (thunkAPI) => {
  try {
    return await challengeService.getAll();
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getById = createAsyncThunk("challenges/getById", async (id, thunkAPI) => {
  try {
    return await challengeService.getById(id);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const addChallenge = createAsyncThunk("challenges/addChallenge", async (challenge, thunkAPI) => {
  try {
    return await challengeService.addChallenge(challenge);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.challenges = action.payload;
    });
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.challenge = action.payload;
    });
    builder.addCase(addChallenge.fulfilled, (state, action) => {
      state.challenges = [action.payload, ...state.challenges]
    });
  },
});

export const { reset } = challengeSlice.actions;
export default challengeSlice.reducer;