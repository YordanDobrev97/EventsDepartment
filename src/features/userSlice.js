import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.fullName = action.payload.fullName
    },
    logOut: (state, action) => {
        state.fullName = null
    }
  }
});

export const { setUser, logOut } = userSlice.actions

export const getUser = state => state.fullName;

export default userSlice.reducer