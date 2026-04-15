import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        currentUser: null,
        registeredUsers: []
    },
    reducers: {
        register: (state, action) => {
            state.registeredUsers.push(action.payload)
        },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser =null;
        },
    },
});

export const {register,login, logout} = authSlice.actions;
export default authSlice.reducer;