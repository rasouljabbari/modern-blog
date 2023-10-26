"use client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postList: [],
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePostList: (state, action) => {
            console.log(action.payload);
            
            state.postList = action.payload
        }
    },
})

export default postSlice.reducer
export const { updatePostList } = postSlice.actions