import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyService from "./companyService";

const company = JSON.parse(localStorage.getItem("company"));

const initialState = {
    company: company ? company : null,
    companies: [],
    companyInfoProfile: {},
    isError: false,
    isSuccess: false,
    message: " ",
};

export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers:{
        reset: (state) =>{
            state.isError = false;
            state.isSuccess = false;
            state.message = " ";
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, (state, action)=>{
            state.isSuccess = true;
            state.message = action.payload;
        })
        .addCase(register.rejected, (state,action)=>{
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.company = action.payload;
            state.isSuccess = true;
            state.message = action.payload;
        })
        .addCase(login.rejected, (state,action)=>{
            state.isError = true;
            state.message = action.payload;
        })
        builder.addCase(getAllCompanies.fulfilled, (state, action) => {
            state.companies = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAllCompanies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(confirm.fulfilled, (state, action) => {
            state.company = action.payload;
            state.isLoading = false;
          });
    }
})

export const register = createAsyncThunk("company/register", async (company, thunkApi)=>{
    try{
        return await companyService.register(company);
    }catch(error){
        const message = error.response.data[0].message;
        return thunkApi.rejectWithValue(message);
    }
})

export const login = createAsyncThunk("company/login", async(company, thunkApi)=>{
    try{
        return await companyService.login(company);
    }catch(error){
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const logout = createAsyncThunk("company/logout", async(company, thunkApi)=>{
    try{
        return await companyService.logout(company);
    }catch(error){
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const getAllCompanies = createAsyncThunk("companies/getAllCompanies", async () => {
    try {
      return await companyService.getAllCompanies();
    } catch (error) {
      console.error(error);
    }
  });

  export const confirm = createAsyncThunk("posts/confirmCompany", async (_id) => {
    try {
      return await companyService.confirm(_id);
    } catch (error) {
      console.error(error);
    }
  });

export const { reset } = companySlice.actions;
export default companySlice.reducer;