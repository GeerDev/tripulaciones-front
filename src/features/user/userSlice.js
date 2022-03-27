import userService from "./userService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isError: false,
    userNow: {},
    userSearch: [],
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
        resetUser: (state) => {
            state.userNow = {};
          },
        resetSearch: (state) => {
            state.userSearch = [];
        }  
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
            .addCase(getById.fulfilled, (state, action) => {
                state.userNow = action.payload
            })
            .addCase(searchByName.fulfilled, (state, action) => {
                state.userSearch = action.payload;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const user = state.user.map((element) => {
                  if (element._id === action.payload.user._id) {
                    element = action.payload.user;
                  }
                  return element
              })
              state.user = user
              })
              .addCase(deleteMySelf.fulfilled, (state, action) => {
                state.user = null;
                state.message = action.payload;
              });
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

export const logoutUser = createAsyncThunk("user/logout", async (thunkApi) => {
    try {
        return await userService.logoutUser()
    } catch (error) {
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message)
    }
})

export const getById = createAsyncThunk("user/getById", async (_id, thunkApi) => {
    try {
        return await userService.getById(_id)
    } catch (error) {
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message)
    }
})

export const searchByName = createAsyncThunk("user/searchByName", async (name, thunkAPI) => {
    try {
      return await userService.searchByName(name);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const updateUser = createAsyncThunk("user/updateUser", async (user, thunkAPI) => {
    try {
      return await userService.updateUser(user);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

  export const deleteMySelf = createAsyncThunk("user/deleteMySelf", async () => {
    try {
      return await userService.deleteMySelf();
    } catch (error) {
      console.error(error);
    }
  });

export const { reset, resetUser, resetSearch } = userSlice.actions;
export default userSlice.reducer;