import {configureStore} from '@reduxjs/toolkit';
import api from '../api/api'
import { userSlice } from '../slices/userSlice';


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})