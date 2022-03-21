import userService from "./userService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'));

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isSucscess = true;
                state.message = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload
            })
    }
});

export const register = createAsyncThunk("auth/register", async (user, thunkApi) => {
    try {
        return await userService.register(user)
    } catch (error) {
        const message = error.response.data[0].message;
        return thunkApi.rejectWithValue(message)
    }
})

export default userSlice.reducer;