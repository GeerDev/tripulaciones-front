import userService from "./userService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isSucess: false,
    isError: false,
    message: ''
  };

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isSucscess = true;
                state.message = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.user = action.payload
                state.isSucscess = true;
                state.message = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload
        })
    }
});

export const registerUser = createAsyncThunk("auth/register", async (user, thunkApi) => {
    try {
        return await userService.registerUser(user)
    } catch (error) {
        const message = error.response.data[0].message;
        return thunkApi.rejectWithValue(message)
    }
})

export const loginUser = createAsyncThunk("auth/login", async (user, thunkApi) => {
    try {
        return await userService.loginUser(user)
    } catch (error) {
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message)
    }
})

export default userSlice.reducer;