// import { createSlice } from "@reduxjs/toolkit";

// const getUsersFromLocalStorage = () => {
//     const users = localStorage.getItem("users");
//     return users ? JSON.parse(users) : [];
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         users: getUsersFromLocalStorage(),
//         currentUser: null,
//     },
//     reducers: {
//         registerUser: (state, action) => {
//             const users = getUsersFromLocalStorage();
//             users.push(action.payload);
//             localStorage.setItem("users", JSON.stringify(users));
//             state.users = users;
//         },
//         loginUser: (state, action) => {
//             const { email, password } = action.payload;
//             const users = getUsersFromLocalStorage();
            
//             const user = users.find(user => user.email === email && user.password === password);
            
//             if (user) {
//                 state.currentUser = user;
//                 localStorage.setItem("currentUser", JSON.stringify(user));
//             } else {
//                 alert("Invalid email or password");
//             }
//         },
//         logoutUser: (state) => {
//             localStorage.removeItem("currentUser");
//             state.currentUser = null;
//         },
//     },
// });

// export const { registerUser, loginUser, logoutUser } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit"

const getUsersFromLocalStorage = () => {
    const users = localStorage.getItem("users")
    return users ? JSON.parse(users) : []
};

const getCurrentUserFromLocalStorage = () => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        users: getUsersFromLocalStorage(),
        // currentUserData: getCurrentUserFromLocalStorage(),
        currentUser: getCurrentUserFromLocalStorage()
    },
    reducers: {
        registerUser: (state, action) => {
            const users = getUsersFromLocalStorage()
            users.push({ ...action.payload, personas: [] })
            localStorage.setItem("users", JSON.stringify(users))
            state.users = users
        },

        loginUser: (state, action) => {
            const { email, password } = action.payload
            const users = getUsersFromLocalStorage()
            const user = users.find(user => user.email === email && user.password === password)
            
            if (user) {
                state.currentUser = user;
                localStorage.setItem("currentUser", JSON.stringify(user))
            } else {
                alert("Invalid email or password")
            }
        },

        logoutUser: (state) => {
            localStorage.removeItem("currentUser")
            state.currentUser = null
        },
        
        updatePersonaForCurrentUser: (state, action) => {
            if (state.currentUser) {
                const updatedPersona = action.payload

                if (!state.currentUser.personas) {
                    state.currentUser.personas = []
                }

                const index = state.currentUser.personas.findIndex(p => p.id === updatedPersona.id);

                if (index !== -1) {
                    state.currentUser.personas[index] = updatedPersona
                } else {
                    const newId = state.currentUser.personas.length > 0
                        ? state.currentUser.personas[state.currentUser.personas.length - 1].id + 1
                        : 1

                    state.currentUser.personas.push({ ...updatedPersona, id: newId })
                }

                localStorage.setItem("currentUser", JSON.stringify(state.currentUser))

                const users = getUsersFromLocalStorage()
                const updatedUsers = users.map(user =>
                    user.email === state.currentUser.email
                        ? { ...user, personas: state.currentUser.personas }
                        : user
                )

                localStorage.setItem("users", JSON.stringify(updatedUsers))
                state.users = updatedUsers
            }
        },
        deletePersonaForCurrentUser: (state, action) => {
            const Pid = action.payload
            const updatedData = state.currentUser.personas.filter( p => p.id !== Pid)

            state.currentUser.personas = updatedData

            localStorage.setItem("currentUser", JSON.stringify({
                ...state.currentUser,
                personas: updatedData
            }))

            const users = getUsersFromLocalStorage()
            const updatedUsers = users.map(user =>
                user.email === state.currentUser.email
                    ? { ...user, personas: state.currentUser.personas }
                    : user
            )

            localStorage.setItem("users", JSON.stringify(updatedUsers))
            state.users = updatedUsers
        }
    }
})

export const { registerUser, loginUser, logoutUser, updatePersonaForCurrentUser, deletePersonaForCurrentUser } = authSlice.actions
export default authSlice.reducer
