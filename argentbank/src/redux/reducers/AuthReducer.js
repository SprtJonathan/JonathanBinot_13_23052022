const authState = {
  isAuthenticated: false,
  body: {
    token:
      "",
  },
};

const authReducer = (state, action) => {
  return state;
};

export default authReducer;

// import { createSlice } from "@reduxjs/toolkit";

// const jwtSlice = createSlice({
//   name: "jwtToken",
//   initialState: "",
//   reducers: {
//     setJwtToken: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export default jwtSlice;
