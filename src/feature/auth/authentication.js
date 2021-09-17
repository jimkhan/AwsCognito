import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
}

const authState = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action )=> {
            state.isLoading = false,
            state.userName = action.payload.name,
            state.userToken = action.payload.token
        },
        signOut: state => initialState
    }
})

export const {signIn, signOut} = authState.actions

export default authState.reducer