import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
    token: localStorage.getItem('authToken')||null,
};





export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            if(action.payload.error){
                throw new Error(action.payload.error.toString());
                // return;            
            }
            localStorage.setItem('authToken', JSON.stringify(action.payload.token));
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            console.log("logged in");
            state.user = action.payload.user;
            state.token = action.payload.token;

        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
        }

    },
});


export const { login, logout } = userSlice.actions;