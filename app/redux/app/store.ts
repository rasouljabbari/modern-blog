"use client";
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice'
import userSessionsReducer from '../features/userSessionSlice'

const rootReducer = combineReducers({
    postsReducer,
    userSessionsReducer
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;