import { configureStore } from '@reduxjs/toolkit';
import user from '../features/user/userslice';
import company from '../features/company/companySlice';
export const store = configureStore({
    reducer: {
        user,
        company
    }
})
