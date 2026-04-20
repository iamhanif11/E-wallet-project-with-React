import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        currentUser: null
    },
    reducers: {
        // register: (state, action) => {
        //     state.registeredUsers.push(action.payload)//dipisahkan untuk kemudahan migrasi
        // },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser =null;
        },

        updateSessionPin: (state, action) => {
            if(state.currentUser){
                state.currentUser.pin = action.payload
            }
        }
    },
});

export const {login, logout, updateSessionPin} = authSlice.actions;
export default authSlice.reducer;