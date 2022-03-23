import userService from "./userService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isError: false,
    message: ''
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = " ";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.message = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isSuccess = true;
                state.message = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
        })
    }
});


export const registerUser = createAsyncThunk("user/register", async (user, thunkApi) => {
    try {
        return await userService.registerUser(user)
    } catch (error) {
        const message = error.response.data[0].message;
        return thunkApi.rejectWithValue(message)
    }
})

export const loginUser = createAsyncThunk("user/login", async (user, thunkApi) => {
    try {
        return await userService.loginUser(user)
    } catch (error) {
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message)
    }
})

export const logoutUser = createAsyncThunk("user/logout", async () => {
    try {
        return await userService.logoutUser()
    } catch (error) {
        console.error(error)
    }
})

export const { reset } = userSlice.actions;
export default userSlice.reducer;