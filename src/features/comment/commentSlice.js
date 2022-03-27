import commentService from "./commentService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: []
};

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
         builder
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.comments = [...state.comments, action.payload]
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.comments = state.comments.filter((comment) => comment._id !== action.payload.comment._id)
            })
            .addCase(like.fulfilled, (state, action) => {
                const comments = state.comments.map((element) => {
                  if (element._id === action.payload._id) {
                    element = action.payload;
                  }
                  return element
              })
              state.comments = comments
              })
            .addCase(dislike.fulfilled, (state, action) => {
                const comments = state.comments.map((element) => {
                  if (element._id === action.payload._id) {
                    element = action.payload;
                  }
                  return element
              })
              state.comments = comments
              })
    }
});

export const getComments = createAsyncThunk("comment/getComments", async (_id, thunkAPI) => {
    try {
      return await commentService.getComments(_id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const createComment = createAsyncThunk("comment/create", async (data, thunkApi) => {
    try {
        return await commentService.createComment(data)
    } catch (error) {
        const message = error.response.data[0].message;
        return thunkApi.rejectWithValue(message)
    }
})

export const deleteComment = createAsyncThunk("comment/deleteComment", async (_id, thunkAPI) => {
    try {
      return await commentService.deleteComment(_id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });
  
  export const like = createAsyncThunk("comment/like", async (_id, thunkAPI) => {
    try {
      return await commentService.like(_id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });
  
  export const dislike = createAsyncThunk("comment/dislike", async (_id, thunkAPI) => {
    try {
      return await commentService.dislike(_id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export default commentSlice.reducer;