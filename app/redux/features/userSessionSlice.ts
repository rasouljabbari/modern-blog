"use client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
}

const postSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserSessions: (state, action) => {
            console.log(state, action);
            
            state.user = action.payload
        }
    },
})

export default postSlice.reducer
export const { updateUserSessions } = postSlice.actions