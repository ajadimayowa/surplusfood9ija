import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userToken: "",
    userBio : {
      name : ''
    }
  },
  reducers: {
    loguserOut: (state) => {
      state.userToken = "";
    },

    logUserIn: (state, data) => {
      state.userToken = data.payload;
      console.log('from redux')
    },
  },
});

export const userDefSlice = userSlice.reducer;
export const setUserInfo = userSlice.actions.logUserIn;
export const clearUserInfo = userSlice.actions.loguserOut;
