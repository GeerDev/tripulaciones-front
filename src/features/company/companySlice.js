import {createSlice, createAsyncThunk } from "@redux/toolkit";
import companyService from "./companyService";

const company = JSON.parse(localStorage.getItem("company"));

const initialState = {
    company: company ? company : null,
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
})