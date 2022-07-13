import { configureStore, } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store =  configureStore({
    reducer: {
        user: userReducer,
    }
})

export const appState = store.getState()
export const appDispatch = store.dispatch

export default store;