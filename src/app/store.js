import { configureStore } from '@reduxjs/toolkit';
import user from '../features/user/userSlice';
import company from '../features/company/companySlice';
import challenge from '../features/challenge/challengeSlice';
import comment from '../features/comment/commentSlice';
import post from '../features/post/postSlice'
import datascience from '../features/datascience/datascienceSlice'

export const store = configureStore({
    reducer: {
        user,
        company,
        challenge,
        comment,
        post,
        datascience
    }
})
