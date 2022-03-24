import { configureStore } from '@reduxjs/toolkit';
import user from '../features/user/userSlice';
import company from '../features/company/companySlice';
import challenger from '../features/challenger/challengerSlice';
export const store = configureStore({
    reducer: {
        user,
        company,
        challenger
    }
})
