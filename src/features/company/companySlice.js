import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyService from "./companyService";

const company = JSON.parse(localStorage.getItem("company"));

const initialState = {
    company: company ? company : null,
    companies: [],
    companyInfo: {},
    companySearch: [],
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
        resetSearchCompany: (state) => {
            state.companySearch = [];
        }  
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
        builder.addCase(searchByCompanyName.fulfilled, (state, action) => {
            state.companySearch = action.payload;
        })
        builder.addCase(confirm.fulfilled, (state, action) => {
            state.isLoading = false;
            const companies = state.companies.map((element) => {
                if (element._id === action.payload.company._id) {
                  element = action.payload.company;
                }
                return element
            })
            state.companies = companies
          });
        builder.addCase(getRankingCompanies.fulfilled, (state, action) => {
            state.companies = action.payload;
        });
        builder.addCase(getCompanyById.fulfilled, (state, action) => {
            state.companyInfo = action.payload
        });
        builder.addCase(updateCompany.fulfilled, (state, action) => {
            const company = state.company.map((element) => {
              if (element._id === action.payload.company._id) {
                element = action.payload.company;
              }
              return element
          })
          state.company = company
          })
          .addCase(deleteCompany.fulfilled, (state, action) => {
            state.company = null;
            state.message = action.payload;
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

  export const confirm = createAsyncThunk("companies/confirmCompany", async (_id) => {
    try {
      return await companyService.confirm(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const getRankingCompanies = createAsyncThunk("companies/getRankingCompanies", async () => {
    try {
      return await companyService.getRankingCompanies();
    } catch (error) {
      console.error(error);
    }
  });

  export const searchByCompanyName = createAsyncThunk("companies/searchByCompanyName", async (name, thunkAPI) => {
    try {
      return await companyService.searchByCompanyName(name);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

  export const getCompanyById = createAsyncThunk("companies/getCompanyById", async (_id, thunkApi) => {
    try {
        return await companyService.getCompanyById(_id)
    } catch (error) {
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message)
    }
})

export const updateCompany = createAsyncThunk("companies/updateCompany", async (company, thunkAPI) => {
    try {
      return await companyService.updateCompany(company);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

  export const deleteCompany = createAsyncThunk("user/deleteCompany", async () => {
    try {
      return await companyService.deleteCompany();
    } catch (error) {
      console.error(error);
    }
  });

export const { reset, resetSearchCompany } = companySlice.actions;
export default companySlice.reducer;