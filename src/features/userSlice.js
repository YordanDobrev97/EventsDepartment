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
    logOut: state => {
        state.fullName = null
    }
  }
});

export const { setUser, logOut } = userSlice.actions

export default userSlice.reducer