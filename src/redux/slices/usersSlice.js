import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        registeredUsers: []
    },
    reducers:{
        register: (state, action) => {
            state.registeredUsers.push({...action.payload,
                balance: 0,
                income: 0,
                expense: 0,
                history: []
            })
        },

        topUp: (state, action) => {
            const {email, amount} = action.payload
            const user = state.registeredUsers.find(u => u.email === email)

            if (user) {
                const value = Number(amount)
                user.balance += value
                user.income = (user.income || 0) + value

            }
        },

        transferOut: (state, action) => {
            const {email, amount, recipientName, recipientImage} = action.payload;
            const user = state.registeredUsers.find(u => u.email === email)
            const value = Number(amount)

            if (user && user.balance >= value){
                user.balance -= value
                user.expense = (user.expense || 0) + value

                if(!user.history) user.history = [];

                user.history.unshift({
                    id: Date.now(), 
                    name: recipientName,
                    type: "Send",
                    amount: `Rp.${value.toLocaleString('id-ID')}`,
                    isIncome: false,
                    image: recipientImage,
                    date: new Date().toISOString()
                })
            }

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
        },
    }
});

export const { register, addPinToUser, resetUserPassword, topUp, transferOut } = usersSlice.actions;

export default usersSlice.reducer;