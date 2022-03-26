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
            .addCase(createComment.fulfilled, (state, action) => {
                state.comments = [action.payload, ...state.comments]
            })
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

export default commentSlice.reducer;