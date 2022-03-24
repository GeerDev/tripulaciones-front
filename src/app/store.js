import { configureStore } from '@reduxjs/toolkit';
import user from '../features/user/userSlice';
import company from '../features/company/companySlice';
import post from '../features/postUser/postUserSlice';

export const store = configureStore({
    reducer: {
        user,
        company,
        post
    }
})
