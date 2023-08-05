import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';





const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (body) => ({
                url: `/login`,
                method: 'POST',
                body,
            }),
            
        }),
        Register: builder.mutation({
            query: (body) => ({
                url: `/register`,
                method: 'POST',
                body,
            }),
        }),
        GetMe: builder.mutation({
            query: () => ({
                url: `/user`,
                method: 'GET',
            }),
        }),


    })
})


export default api;

export const { useLoginMutation, useRegisterMutation, useGetMeMutation } = api;