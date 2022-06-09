// const authState = {
//   isAuthenticated: false,
//   body: {
//     token:
//       "",
//   },
// };

// const authReducer = (state, action) => {
//   return state;
// };

// export default authReducer;

import { createSlice } from "@reduxjs/toolkit";

const jwtSlice = createSlice({
  name: "userStatus",
  initialState: {
    value: { token: "", isAuthenticated: false },
  },
  reducers: {
    setJwtToken: (state, action) => {
      console.log(action.payload)
      state.value = action.payload;
    },
  },
});


export const { setJwtToken } = jwtSlice.actions;

export default jwtSlice.reducer;
