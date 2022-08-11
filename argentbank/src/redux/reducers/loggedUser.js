import { createSlice } from "@reduxjs/toolkit";

const defaultUserValue = { token: "", isAuthenticated: false };
let userStateValue = defaultUserValue;
/* Checking if there is a token in localStorage. If there is, it is setting the initial state to the
token. This is used for the remember me option */
if (JSON.parse(localStorage.getItem("token"))) {
  userStateValue = {
    token: JSON.parse(localStorage.getItem("token")).token,
    isAuthenticated: JSON.parse(localStorage.getItem("token")).isAuthenticated,
  };
}

const userSlice = createSlice({
  name: "userStatus",
  initialState: {
    value: userStateValue,
  },
  reducers: {
    login: (state, action) => {
      // console.log(action.payload);
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = defaultUserValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
