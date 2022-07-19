import { configureStore, } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import eventReducer from "../features/eventSlice";

export const store =  configureStore({
    reducer: {
        user: userReducer,
        event: eventReducer,
    }
})

export const appState = store.getState;

export default store;