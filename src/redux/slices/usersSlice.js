import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        registeredUsers: []
    },
    reducers:{
        register: (state, action) => {
            state.registeredUsers.push(action.payload)
        },

        addPinToUser: (state, action) => {
            const{email, pin} = action.payload;

            const user = state.registeredUsers.find(u => u.email === email)
            if (user) {
                user.pin = pin
            }
        },

        resetUserPassword: (state, action) => {
            const{email, newPassword} = action.payload
            const user = state.registeredUsers.find(u => u.email === email)
            if(user){
                user.password = newPassword
            }
        }
    }
});

export const { register, addPinToUser, resetUserPassword } = usersSlice.actions;
export default usersSlice.reducer;