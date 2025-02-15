// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     user: null
// }

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload
//         },

//         removeUser: (state, action) => {
//             state.user = null;
//         }
//     }
// })

// export const { setUser,removeUser } = userSlice.actions

// export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const getUsersFromLocalStorage = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        users: getUsersFromLocalStorage(),
        currentUser: null,
    },
    reducers: {
        registerUser: (state, action) => {
            const users = getUsersFromLocalStorage();
            users.push(action.payload);
            localStorage.setItem("users", JSON.stringify(users));
            state.users = users;
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const users = getUsersFromLocalStorage();
            
            const user = users.find(user => user.email === email && user.password === password);
            
            if (user) {
                state.currentUser = user;
                localStorage.setItem("currentUser", JSON.stringify(user));
            } else {
                alert("Invalid email or password");
            }
        },
        logoutUser: (state) => {
            localStorage.removeItem("currentUser");
            state.currentUser = null;
        },
    },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
