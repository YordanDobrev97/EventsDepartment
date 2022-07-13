import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    fullName: localStorage.getItem("user") || null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        console.log(action.payload.fullName)
        state.fullName = action.payload.fullName
        localStorage.setItem("user", state.fullName)
    },
    logOut: (state, action) => {
        state.fullName = null
        localStorage.removeItem("user")
    }
  }
});

export const { setUser, logOut } = userSlice.actions

export const getUser = state => state.fullName;

export default userSlice.reducer